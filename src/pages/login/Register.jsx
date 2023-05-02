import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/icons/google.png";
import githubIcon from "../../assets/icons/github.png";
import { authContext } from "../../context/AuthProvider";

const Register = () => {
  const { registerUser, addUserInfo } = useContext(authContext);
  const [check, setCheck] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const imageUrl = form.photoUrl.value;

    if (!/.{6,}/.test(password)) {
      setCheck("Password should be at least 6 character, Or more!");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const newUser = result.user;
        addUserInfo(name, imageUrl);
        console.log(newUser);
        setCheck("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <form
            onSubmit={handleRegister}
            className="card flex-shrink-0 w-full lg:w-[500px] max-w-sm  shadow-sm border-l-2 border-l-black rounded-none"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Profile Image"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  className="input input-bordered rounded-none"
                  required
                />
                <small className="text-error">{check}</small>
                <label className="label pb-2">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-none text-white">
                  Register
                </button>
              </div>
              <div className="border-b border-b-black my-1"></div>
              <div className="form-control mt-1">
                <button className=" border border-black hover:border-transparent hover:bg-blue-800 hover:text-white font-semibold flex items-center justify-center rounded-none  transition-all ease duration-300">
                  <img className="w-[20px] mr-2 my-2" src={googleIcon} alt="" />
                  Sign In With Google
                </button>
              </div>
              <div className="form-control mt-1">
                <button className=" border border-black hover:border-transparent hover:bg-neutral hover:text-white font-semibold flex items-center justify-center rounded-none  transition-all ">
                  <img className="w-[20px] mr-2 my-2" src={githubIcon} alt="" />
                  Sign In With GitHub
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
