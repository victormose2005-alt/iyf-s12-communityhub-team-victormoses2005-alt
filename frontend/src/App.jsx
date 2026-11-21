import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PostList from "./components/PostList";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts" element={<PostList />} />
          <Route path="create" element={<Placeholder title="Create Post" />} />
          <Route path="about" element={<Placeholder title="About" />} />
          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
