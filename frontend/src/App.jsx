import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";

import "./App.css";

function Placeholder({ title }) {
  return <h2>{title} page coming soon.</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />

          <Route path="posts" element={<PostList />} />

          <Route path="create" element={<CreatePost />} />

          <Route path="about" element={<Placeholder title="About" />} />

          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
<Route path="create" element={<Placeholder title="Create Post" />} />



After
Actual component

<Route path="create" element={<CreatePost />} />


And add:
import CreatePost from "./components/CreatePost";
