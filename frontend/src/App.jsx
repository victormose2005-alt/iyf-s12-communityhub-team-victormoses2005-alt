
import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Footer from "./components/Footer";

import "./App.css";

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
    <>
      <Header />

      <div className="app-layout">
        <Sidebar />

        <main>
          <CreatePost onAddPost={handleAddPost} />
          <PostList posts={posts} />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
