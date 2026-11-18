import { useState } from "react";

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
      author: author || "Anonymous",
    };
    onAddPost(newPost);
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br /><br />
        <input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Write your post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br /><br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;