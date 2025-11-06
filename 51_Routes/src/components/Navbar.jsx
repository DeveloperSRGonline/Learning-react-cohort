import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // We will create this CSS file next

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Your Navigation Links */}
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
          <NavLink to="/service" className="nav-link">
            Service
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
