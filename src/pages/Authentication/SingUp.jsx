import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/UserContexts";
const SingUp = () => {
  const { createUser, verifyUser, loginUser } = useContext(AuthContext);
  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        verifyUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 font-serif">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">SingUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingUp}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="sure name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <p>
                      Already have an account?
                      <Link
                        to="/login"
                        className="ml-2 text-success link link-hover"
                      >
                        Login
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning mb-3">SingUp</button>
                </div>
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

export default SingUp;
