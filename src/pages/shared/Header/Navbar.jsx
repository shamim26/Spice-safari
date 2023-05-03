import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../context/AuthProvider";
import logo from "../../../assets/logo.png";
import ActiveNav from "../../../components/ActiveNav/ActiveNav";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-base-100 bg-opacity-70 fixed z-10 lg:px-20 lg:py-4">
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
              <ActiveNav className="font-semibold uppercase" to="/">
                Home
              </ActiveNav>
            </li>
            <li>
              <ActiveNav className="font-semibold uppercase" to="/menu">
                Menu
              </ActiveNav>
            </li>
            <li>
              <ActiveNav className="font-semibold uppercase" to="/contact">
                Contact
              </ActiveNav>
            </li>
            <li>
              <ActiveNav className="font-semibold uppercase" to="/blogs">
                Blog
              </ActiveNav>
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
            <ActiveNav className="font-semibold uppercase" to="/">
              Home
            </ActiveNav>
          </li>
          <li>
            <ActiveNav className="font-semibold uppercase" to="/menu">
              Menu
            </ActiveNav>
          </li>
          <li>
            <ActiveNav className="font-semibold uppercase" to="/contact">
              Contact
            </ActiveNav>
          </li>
          <li>
            <ActiveNav className="font-semibold uppercase" to="/blogs">
              Blog
            </ActiveNav>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <img
            className="w-[40px] rounded-full"
            title={user?.displayName}
            src={user?.photoURL}
            alt=""
          />
          <button onClick={handleLogOut} className="ml-3">
            Log Out
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn btn-primary text-white rounded-none px-8 min-h-6"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
