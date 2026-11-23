
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

function PostList({ posts: localPosts = [] }) {
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        const formatted = data.slice(0, 20).map((post) => ({
          id: `api-${post.id}`,
          title: post.title,
          author: `User ${post.userId}`,
          content: post.body,
          category: "Community",
        }));
        setApiPosts(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <p>Loading community discussions...</p>;
  if (error) return <p>{error}</p>;

  // Show YOUR posts first (from localStorage), then API posts
  const allPosts = [...localPosts, ...apiPosts];

  return (
    <section className="post-list">
      <h2>Community Discussions</h2>
      {allPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;