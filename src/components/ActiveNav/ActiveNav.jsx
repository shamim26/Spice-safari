import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNav = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "underline font-semibold uppercase" : "font-semibold uppercase")}>
      {children}
    </NavLink>
  );
};

export default ActiveNav;
