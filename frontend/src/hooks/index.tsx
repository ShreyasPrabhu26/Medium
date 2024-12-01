import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../config/constants";
import { useNavigate } from "react-router-dom";

export const useBlogs = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<any[]>([]);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token Not Found!");

      const response = await axios.get(
        `${BACKEND_BASE_URL}/api/v1/blog/blogs`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Something went wrong while fetching the Blogs!", error);
      navigate("/signin");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return [loading, blogs];
};

export const useBlog = ({ blogId }: { blogId: string }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [blog, setBlog] = useState<any | null>(null);

  const getBlog = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token Not Found!");

      const response = await axios.get(
        `${BACKEND_BASE_URL}/api/v1/blog/${blogId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setBlog(response.data);
    } catch (error) {
      console.error("Something went wrong while fetching the Blog!", error);
      navigate("/signin");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogId) {
      getBlog();
    }
  }, [blogId]);

  return [loading, blog];
};
