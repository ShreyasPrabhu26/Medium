import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import AuthHeader from "../components/AuthHeader";
import { SignupInput } from "@shreyasprabhu26/medium-common";

import { BACKEND_BASE_URL } from "../../config/constants";

const Signup = () => {
  const navigate = useNavigate();
  const [signUpPayLoad, setSignUpPayLoad] = useState<SignupInput>({
    username: "",
    email: "",
    password: "",
  });

  const handleUserSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/api/v1/user/signup`,
        signUpPayLoad
      );
      localStorage.setItem("token", response?.data?.token);
      navigate("/blogs");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <AuthHeader />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-6">
          <form className="card-body" onSubmit={handleUserSignUp}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                autoFocus
                required
                value={signUpPayLoad.username}
                onChange={(e) =>
                  setSignUpPayLoad({
                    ...signUpPayLoad,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                value={signUpPayLoad.email}
                onChange={(e) =>
                  setSignUpPayLoad({ ...signUpPayLoad, email: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                value={signUpPayLoad.password}
                onChange={(e) =>
                  setSignUpPayLoad({
                    ...signUpPayLoad,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
            <div className="text-center mt-4">
              <span>Already a User? </span>
              <Link to={"/signin"} className="link link-primary">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
