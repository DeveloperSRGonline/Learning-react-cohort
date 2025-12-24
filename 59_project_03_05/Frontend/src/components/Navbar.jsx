import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncLogoutUser } from '../store/userActions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ROUTES } from '../constants/apiConstants';

const Navbar = () => {
    const user = useSelector((state) => state.usersReducer.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const cartCount = user?.cart?.reduce((total, item) => total + item.quantity, 0) || 0;

    const handleLogout = () => {
        dispatch(asyncLogoutUser());
        navigate(ROUTES.LOGIN);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/?search=${searchQuery}`);
        }
    };

    const getLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

    return (
        <nav className='navbar-v2'>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => navigate(ROUTES.HOME)}>
                    PREMIUM<span>STORE</span>
                </div>

                <form className="navbar-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit"><SearchIcon fontSize="small" /></button>
                </form>

                <div className="navbar-links">
                    {user && user.isAdmin && (
                        <NavLink className={getLinkClass} to={ROUTES.ADMIN_CREATE}>
                            <div className="nav-item">
                                <AddBoxIcon fontSize="small" />
                                <span>Admin</span>
                            </div>
                        </NavLink>
                    )}

                    <NavLink className={getLinkClass} to={ROUTES.PROFILE}>
                        <div className="nav-item dropdown-trigger">
                            <AccountCircleIcon fontSize="small" />
                            <span>{user ? user.username.split(' ')[0] : 'Sign In'}</span>
                        </div>
                    </NavLink>

                    <div className="nav-item hide-mobile">
                        <NotificationsNoneIcon fontSize="small" />
                        <span>Notifs</span>
                    </div>

                    <NavLink className={getLinkClass} to={ROUTES.CART}>
                        <div className="nav-item cart-btn-v2">
                            <div className="cart-icon-wrapper">
                                <ShoppingCartIcon fontSize="small" />
                                {cartCount > 0 && <span className="cart-badge-v2">{cartCount}</span>}
                            </div>
                            <span>Cart</span>
                        </div>
                    </NavLink>
                </div>

                {user && (
                    <div className="navbar-logout-mini">
                        <button onClick={handleLogout} title="Logout">
                            <LogoutIcon fontSize="small" />
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;