
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }

        const data = await response.json();

        const formattedPosts = data.slice(0, 10).map((post) => ({
          id: post.id,
          author: `User ${post.userId}`,
          title: post.title,
          content: post.body,
          category: "Community",
        }));

        setPosts(formattedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading community discussions...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="post-list">
      <h1>Community Discussions</h1>

      {posts.length === 0 ? (
        <p>No discussions available.</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </section>
  );
}

export default PostList;
