import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item </a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost upper-case font-semibold text-xl
        lg:text-3xl"
        >
          Spice
          <span className="font-custom font-bold lg:font-extrabold text-primary">
            Safari
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-semibold uppercase" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-semibold uppercase" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="font-semibold uppercase" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="font-semibold uppercase" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary text-white rounded-none px-8 min-h-6">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
