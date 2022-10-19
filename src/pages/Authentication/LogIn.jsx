import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/UserContexts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/rooms";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const axistingUser = result.user;
        console.log(axistingUser);
        if (axistingUser?.emailVerified === false) {
          return alert("your are not valid user!! please varify your email address.");
        }
        toast("login successfully");
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 font-serif">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">LogIn now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control my-3">
                  <button className="btn btn-success">LogIn</button>
                </div>
                <Link to="/signup">
                  <div className="form-control mb-3">
                    <button className="btn btn-warning">SingUp</button>
                  </div>
                </Link>
                <div className="grid grid-cols-3 gap-2">
                  <Link className="btn btn-outline">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                  </Link>
                  <Link className="btn btn-outline">
                    <FaFacebook className="mr-2"></FaFacebook>
                    Facebook
                  </Link>
                  <Link className="btn btn-outline">
                    <FaGithub className="mr-2"></FaGithub>
                    Github
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
