import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import axios from "axios";
import { BACKEND_BASE_URL } from "../config/constants";

const BLOGS = [
  {
    id: "8e35ef48-e6de-4c36-b47d-bfa19147f1af",
    authorId: "5fcb9a56-baed-4b12-87c9-d6a0675064c0",
    title: "Hello World2",
    content: "All is Well2",
    published: true,
    author: {
      id: "5fcb9a56-baed-4b12-87c9-d6a0675064c0",
      username: "Shreyas",
      email: "shreyasprabhu26@gmail.com",
    },
  },
  {
    id: "8e35ef48-e6de-4c36-b47d-bfa19147f1af",
    authorId: "5fcb9a56-baed-4b12-87c9-d6a0675064c0",
    title: "Hello World2",
    content: "All is Well2",
    published: true,
    author: {
      id: "5fcb9a56-baed-4b12-87c9-d6a0675064c0",
      username: "Shreyas",
      email: "shreyasprabhu26@gmail.com",
    },
  },
  {
    id: "8e35ef48-e6de-4c36-b47d-bfa19147f1af",
    authorId: "5fcb9a56-baed-4b12-87c9-d6a0675064c0",
    title: "Hello World2",
    content: "All is Well2",
    published: true,
    author: {
      id: "5fcb9a56-baed-4b12-87c9-d6a0675064c0",
      username: "Shreyas",
      email: "shreyasprabhu26@gmail.com",
    },
  },
];

function App() {
  // const blogs = axios.get(`${BACKEND_BASE_URL}/api/v1/blog/blogs`);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs blogs={BLOGS} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
