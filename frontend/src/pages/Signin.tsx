import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import AuthHeader from "../components/AuthHeader";
import { BACKEND_BASE_URL } from "../../config/constants";

const Signin = () => {
  const navigate = useNavigate();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/api/v1/user/signin`,
        loginPayload
      );
      localStorage.setItem("token", response?.data?.token);
      navigate("/blogs");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <AuthHeader />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleUserLogin}>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                autoFocus
                required
                value={loginPayload.email}
                onChange={(e) =>
                  setLoginPayload({ ...loginPayload, email: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                value={loginPayload.password}
                onChange={(e) =>
                  setLoginPayload({ ...loginPayload, password: e.target.value })
                }
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Log In
              </button>
            </div>
          </form>
          <footer className="text-center mb-5 space-x-5">
            <span>New User?</span>
            <Link to={"/signup"} className="underline">
              SIGNUP HERE!
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Signin;
