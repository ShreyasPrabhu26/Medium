import React from "react";

interface Author {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

interface Blog {
  id: string;
  authorId: string;
  title: string;
  content: string;
  published: boolean;
  author: Author;
}

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={
                blog.author?.avatarUrl ||
                `https://ui-avatars.com/api/?name=${blog.author.username}`
              }
              alt={blog.author.username}
            />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {blog.title}
            </h2>
          </div>
          {blog.published && (
            <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
              Published
            </span>
          )}
        </div>
        <p className=" p-3 pl-7 text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {blog.content}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={
                blog.author?.avatarUrl ||
                `https://ui-avatars.com/api/?name=${blog.author.username}`
              }
              alt={blog.author.username}
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {blog.author.username}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
