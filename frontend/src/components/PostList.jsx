
import { useState } from "react";
import PostCard from "./PostCard";

function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Victor",
      title: "Welcome to ThinkSpace",
      content: "A place to share knowledge, ideas and experiences.",
      category: "Community",
    },
    {
      id: 2,
      author: "Alex",
      title: "Learning React",
      content: "Components and props make applications easier to organise.",
      category: "Technology",
    },
  ]);

  return (
    <section className="post-list">
      <h1>Community Discussions</h1>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
