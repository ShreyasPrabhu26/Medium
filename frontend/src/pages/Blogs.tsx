import React from "react";
import BlogCard from "../components/BlogCard";

type Author = {
  id: string;
  username: string;
  email: string;
};

type Blog = {
  id: string;
  authorId: string;
  title: string;
  content: string;
  published: boolean;
  author: Author;
};

type BlogsProps = {
  blogs: Blog[];
};

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
      <div className="flex flex-col items-center space-y-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
