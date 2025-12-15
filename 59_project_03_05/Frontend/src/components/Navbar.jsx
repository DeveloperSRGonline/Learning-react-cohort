import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { asyncLogoutUser } from '../store/userActions'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Navbar = () => {
    const user = useSelector((state) => state.usersReducer.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getLinkClass = ({ isActive }) => (isActive ? 'link isActive' : 'link');

    return (
        <nav className='navbar'>
            <NavLink className={getLinkClass} to="/"> Home </NavLink>
            {user && user.isAdmin && <NavLink className={getLinkClass} to="/admin/create-product"> <AddBoxIcon /> </NavLink>}
            <NavLink className={getLinkClass} to="/cart"> <ShoppingCartIcon /> </NavLink>
            <NavLink className={getLinkClass} to="/profile"> <AccountCircleIcon /> </NavLink>

            {user ? (
                ""
            ) : (
                <button className='btn btn-primary' onClick={() => navigate('/login')}> Login </button>
            )}
        </nav>
    )
}

export default Navbar