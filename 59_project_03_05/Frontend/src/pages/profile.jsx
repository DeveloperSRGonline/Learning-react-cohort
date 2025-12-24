import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncLogoutUser, asyncUpdateUser } from '../store/userActions';
import { useNavigate } from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ROUTES } from '../constants/apiConstants';

const Profile = () => {
    const user = useSelector((state) => state.usersReducer.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('orders');
    const [isEditing, setIsEditing] = useState(false);
    const [updatedName, setUpdatedName] = useState(user?.username || '');
    const [updatedEmail, setUpdatedEmail] = useState(user?.email || '');

    // State initializes from user. Component remounts when user.id changes due to the key prop.

    const handleLogout = () => {
        dispatch(asyncLogoutUser());
        navigate(ROUTES.LOGIN);
    };

    const handleSave = () => {
        const updatedUser = { ...user, username: updatedName, email: updatedEmail };
        dispatch(asyncUpdateUser(updatedUser));
        setIsEditing(false);
    };

    if (!user) {
        return (
            <div className='profile-container fade-in'>
                <div className='profile-card'>
                    <h1>Please Login</h1>
                    <p>You need to be authenticated to view this page.</p>
                    <button className='btn btn-primary' onClick={() => navigate(ROUTES.LOGIN)}>Go to Login</button>
                </div>
            </div>
        );
    }

    const mockOrders = [
        { id: '#ORD-9921', date: '22 Dec 2025', status: 'Delivered', total: 420.00, items: 2 },
        { id: '#ORD-8812', date: '15 Nov 2025', status: 'Cancelled', total: 89.00, items: 1 }
    ];

    return (
        <div className='profile-page-v2 fade-in' key={user?.id}>
            <div className="profile-layout">
                <div className="profile-sidebar">
                    <div className="sidebar-user-info">
                        <div className="sidebar-avatar">
                            <img src={user.image || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?auto=format&fit=crop&w=400&q=80"} alt="profile" />
                            <div className="avatar-edit"><CameraAltIcon fontSize="small" /></div>
                        </div>
                        <h3>Hello, {user.username.split(' ')[0]}</h3>
                    </div>

                    <div className="sidebar-menu">
                        <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
                            <ShoppingBagIcon fontSize="small" /> My Orders
                        </button>
                        <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
                            <SettingsIcon fontSize="small" /> Account Settings
                        </button>
                        <button className={activeTab === 'address' ? 'active' : ''} onClick={() => setActiveTab('address')}>
                            <LocationOnIcon fontSize="small" /> My Addresses
                        </button>
                        <button className="logout-menu-btn" onClick={handleLogout}>
                            <LogoutIcon fontSize="small" /> Sign Out
                        </button>
                    </div>
                </div>

                <div className="profile-main-content glass">
                    {activeTab === 'orders' && (
                        <div className="orders-tab">
                            <h2>My Orders</h2>
                            <div className="orders-list">
                                {mockOrders.map(order => (
                                    <div key={order.id} className="order-item">
                                        <div className="order-head">
                                            <span className="order-id">{order.id}</span>
                                            <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                                        </div>
                                        <div className="order-body">
                                            <div className="order-info">
                                                <p>Placed on: <strong>{order.date}</strong></p>
                                                <p>Items: <strong>{order.items}</strong></p>
                                            </div>
                                            <div className="order-total">
                                                <span>Total</span>
                                                <h3>${order.total.toFixed(2)}</h3>
                                            </div>
                                        </div>
                                        <button className="btn-outline-small">View Details</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="settings-tab">
                            <div className="section-title-with-btn">
                                <h2>Profile Information</h2>
                                {!isEditing && <button className="btn-text" onClick={() => setIsEditing(true)}>Edit</button>}
                            </div>

                            <div className="settings-form">
                                <div className="form-group">
                                    <label>Username</label>
                                    {isEditing ? (
                                        <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                                    ) : (
                                        <p>{user.username}</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    {isEditing ? (
                                        <input type="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
                                    ) : (
                                        <p>{user.email}</p>
                                    )}
                                </div>
                                {isEditing && (
                                    <div className="form-actions">
                                        <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
                                        <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'address' && (
                        <div className="address-tab">
                            <h2>My Addresses</h2>
                            <div className="address-card add-new">
                                <span>+ Add a new address</span>
                            </div>
                            <div className="address-card">
                                <div className="address-tag">Home</div>
                                <h4>{user.username}</h4>
                                <p>123, Luxury Tower, Premium Street<br />Downtown, New York - 10001</p>
                                <p>Phone: +1 234 567 890</p>
                                <div className="address-actions">
                                    <button className="btn-text">Edit</button>
                                    <button className="btn-text">Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;