import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncLogoutUser, asyncUpdateUser } from '../store/userActions'
import { useNavigate } from 'react-router-dom'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Profile = () => {
    const user = useSelector((state) => state.usersReducer.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [isEditing, setIsEditing] = useState(false);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');

    useEffect(() => {
        if (user) {
            setUpdatedName(user.username);
            setUpdatedEmail(user.email);
        }
    }, [user]);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                const updatedUser = { ...user, image: base64String };
                dispatch(asyncUpdateUser(updatedUser));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        dispatch(asyncLogoutUser());
        navigate('/')
    }

    const handleSave = () => {
        const updatedUser = { ...user, username: updatedName, email: updatedEmail };
        dispatch(asyncUpdateUser(updatedUser));
        setIsEditing(false);
    }

    if (!user) return <div className='profile-container'><h1>Please Login to view Profile</h1></div>

    return (
        <div className='profile-container'>
            <div className='profile-card'>
                <div className='profile-image-wrapper' onClick={handleImageClick}>
                    <img
                        src={user.image || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                        alt="Profile"
                        className='profile-image'
                    />
                    <div className="image-overlay">
                        <CameraAltIcon sx={{ color: 'white', fontSize: 40 }} />
                    </div>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                />

                {isEditing ? (
                    <>
                        <input
                            type="text"
                            className='profile-input-inplace input-username'
                            value={updatedName}
                            onChange={(e) => setUpdatedName(e.target.value)}
                            placeholder="Username"
                        />
                        <input
                            type="email"
                            className='profile-input-inplace input-email'
                            value={updatedEmail}
                            onChange={(e) => setUpdatedEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <div className="profile-actions">
                            <button className='btn btn-primary' onClick={handleSave}>Save</button>
                            <button className='btn btn-secondary' onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className='username'>{user.username}</h2>
                        <p className='email'>{user.email}</p>
                        <button className='btn btn-secondary' onClick={() => setIsEditing(true)}>Edit Profile</button>
                    </>
                )}

                <button className='btn btn-danger' onClick={handleLogout}> Logout </button>
            </div>
        </div>
    )
}

export default Profile