

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
