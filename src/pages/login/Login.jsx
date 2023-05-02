import React, { useContext, useState } from "react";
import googleIcon from "../../assets/icons/google.png";
import githubIcon from "../../assets/icons/github.png";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const Login = () => {
  const { loginUser,googleSignIn,githubSignIn } = useContext(authContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
      })
      .catch((err) => {
        const errMsg = err.message;
        setError(errMsg);
      });
  };

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(user =>{
      setError('')
    })
    .catch(err =>{
      setError(err.message)
    })
  }

  const handleGithubSignIn = () =>{
    githubSignIn()
    .then(user =>{
      setError('')
    })
    .catch(err =>{
      setError(err.message)
    })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full lg:w-[500px] max-w-sm  shadow-sm border-l-2 border-l-black rounded-none"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-none"
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
                className="input input-bordered rounded-none"
                required
              />
              <small className="text-error">{error}</small>
              <label className="label pb-2">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <Link to="/register" className="label-text-alt link link-hover">
                  New to Safari? Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-none text-white">
                Login
              </button>
            </div>
            <div className="border-b border-b-black my-1"></div>
            <div className="form-control mt-1">
              <button onClick={handleGoogleSignIn} className=" border border-black hover:border-transparent hover:bg-blue-800 hover:text-white font-semibold flex items-center justify-center rounded-none  transition-all ease duration-300">
                <img className="w-[20px] mr-2 my-2" src={googleIcon} alt="" />
                Sign In With Google
              </button>
            </div>
            <div className="form-control mt-1">
              <button onClick={handleGithubSignIn} className=" border border-black hover:border-transparent hover:bg-neutral hover:text-white font-semibold flex items-center justify-center rounded-none  transition-all ">
                <img className="w-[20px] mr-2 my-2" src={githubIcon} alt="" />
                Sign In With GitHub
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
