import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

const Signin = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <AuthHeader />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                autoFocus
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log In</button>
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
