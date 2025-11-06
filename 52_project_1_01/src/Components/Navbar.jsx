import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {  
  return (
    <div className="flex justify-center text-sm gap-x-10 mb-10">
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
        Home
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/about">
        About
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "text-green-500")} to="/create-recipe">
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
