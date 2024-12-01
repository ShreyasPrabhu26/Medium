import React from "react";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks/index";

const Blogs: React.FC = () => {
  const [loading, blogs] = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
      <div className="flex flex-col items-center space-y-6">
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <div>No blogs available.</div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
