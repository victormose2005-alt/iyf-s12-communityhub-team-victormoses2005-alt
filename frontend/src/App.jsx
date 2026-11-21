import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout/Layout";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

import "./App.css";

function Placeholder({ title }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>Coming soon.</p>
    </section>
  );
}

function App() {
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

  function handleAddPost(newPost) {
    setPosts((previousPosts) => [newPost, ...previousPosts]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PostList posts={posts} />}
          />

          <Route
            path="posts"
            element={<PostList posts={posts} />}
          />

          <Route
            path="create"
            element={<CreatePost onAddPost={handleAddPost} />}
          />

          <Route
            path="about"
            element={<Placeholder title="About" />}
          />

          <Route
            path="*"
            element={<Placeholder title="Page not found" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;