import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../constants/apiConstants';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Premium Store</h3>
                    <p>Elevating your shopping experience with curated luxury and modern essentials. Your one-stop destination for style and quality.</p>
                    <div className="social-links">
                        <FacebookIcon className="social-icon" />
                        <TwitterIcon className="social-icon" />
                        <InstagramIcon className="social-icon" />
                        <LinkedInIcon className="social-icon" />
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><NavLink to={ROUTES.HOME}>Shop Collection</NavLink></li>
                        <li><NavLink to={ROUTES.CART}>View Cart</NavLink></li>
                        <li><NavLink to={ROUTES.PROFILE}>My Profile</NavLink></li>
                        <li><NavLink to={ROUTES.LOGIN}>Login / Register</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Customer Care</h4>
                    <ul>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button className="newsletter-btn">Join</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Premium Store. All rights reserved. Designed for Excellence.</p>
            </div>
        </footer>
    );
};

export default Footer;
