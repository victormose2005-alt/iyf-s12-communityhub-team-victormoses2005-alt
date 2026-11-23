
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useLocalStorage("communityhub-posts", [
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
      content: "Components and props make applications easier to organize.",
      category: "Technology",
    },
  ]);

  function handleAddPost(newPost) {
    setPosts((previousPosts) => [newPost, ...previousPosts]);
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <CreatePost onAddPost={handleAddPost} />
      <PostList posts={posts} />
      <Footer />
    </div>
  );
}

export default App;