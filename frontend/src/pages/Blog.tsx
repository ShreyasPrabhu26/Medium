import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";

const Blog = () => {
  const { blogId } = useParams();
  const [loading, blog] = useBlog({ blogId: blogId || "" });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-gray-600">Loading...!!!</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-red-600">
          Blog not found! for {blogId}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {blog.content}
        </p>
        <div className="border-t pt-4 mt-6 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-800">Author:</span>{" "}
            {blog.author.username}
          </div>
          <div>
            <span className="font-medium text-gray-800">Email:</span>{" "}
            {blog.author.email}
          </div>
          <div>
            <span className="font-medium text-gray-800">Published:</span>{" "}
            {blog.published ? "Yes" : "No"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
