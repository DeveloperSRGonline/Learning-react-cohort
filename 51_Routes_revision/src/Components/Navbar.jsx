import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/product">Product </NavLink>
      <NavLink to="/service">Service </NavLink>
    </>
  );
};

export default Navbar;
