import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className='navbar'>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "link active" : "link"}
            >
                Home
            </NavLink>
            <NavLink
                to="/products"
                className={({ isActive }) => isActive ? "link active" : "link"}
            >
                Products
            </NavLink>

        </nav>
    )
}

export default Navbar