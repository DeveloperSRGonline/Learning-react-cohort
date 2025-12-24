import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from '../hooks/useCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const products = useSelector((state) => state.productsReducer.products);
    const [product, setProduct] = useState(null);
    const [selectedTab, setSelectedTab] = useState('description');

    useEffect(() => {
        if (products.length > 0) {
            const found = products.find(p => p.id === id);
            setProduct(found);
            window.scrollTo(0, 0);
        }
    }, [id, products]);

    if (!product) return <Loader />;

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const discount = 15; // Simulated discount %
    const originalPrice = product.price / (1 - discount / 100);

    return (
        <div className="product-details-page fade-in">
            <div className="breadcrumb">
                <span onClick={() => navigate('/')}>Home</span> /
                <span onClick={() => navigate('/')}>{product.category}</span> /
                <span className="current">{product.title}</span>
            </div>

            <div className="details-container">
                <div className="details-image-section">
                    <div className="image-main-wrapper">
                        <div className="product-tag-float">Best Seller</div>
                        <img src={product.image} alt={product.title} className="main-zoom-image" />
                    </div>
                    <div className="image-thumbnails">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`thumb ${i === 1 ? 'active' : ''}`}>
                                <img src={product.image} alt="thumbnail" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="details-info-section">
                    <div className="brand-header">
                        <span className="details-category">{product.category}</span>
                        <div className="rating-pill">
                            4.5 <StarIcon sx={{ fontSize: 16 }} />
                            <span className="count">| 2.4k Ratings</span>
                        </div>
                    </div>

                    <h1 className="details-title">{product.title}</h1>

                    <div className="price-container">
                        <span className="current-price">${product.price.toFixed(2)}</span>
                        <span className="original-price">${originalPrice.toFixed(2)}</span>
                        <span className="discount-tag">{discount}% OFF</span>
                    </div>

                    <div className="offers-section">
                        <h4><LocalOfferIcon fontSize="small" /> Available Offers</h4>
                        <ul>
                            <li><strong>Bank Offer</strong> 10% Instant Discount on SBI Credit Card. <a href="#">T&C</a></li>
                            <li><strong>Combo Offer</strong> Buy 2 items save extra 5%. <a href="#">T&C</a></li>
                            <li><strong>Partner Offer</strong> Get up to $20 cashback on first order.</li>
                        </ul>
                    </div>

                    <div className="details-actions-fixed">
                        <button className="add-to-cart-btn-large primary" onClick={() => addToCart(product.id)}>
                            <ShoppingBagIcon /> Add to Bag
                        </button>
                        <button className="wishlist-btn-large">
                            Wishlist
                        </button>
                    </div>

                    <div className="details-tabs">
                        <div className="tab-headers">
                            <button className={selectedTab === 'description' ? 'active' : ''} onClick={() => setSelectedTab('description')}>Description</button>
                            <button className={selectedTab === 'specs' ? 'active' : ''} onClick={() => setSelectedTab('specs')}>Specifications</button>
                            <button className={selectedTab === 'reviews' ? 'active' : ''} onClick={() => setSelectedTab('reviews')}>Reviews</button>
                        </div>
                        <div className="tab-content">
                            {selectedTab === 'description' && (
                                <p>{product.description}. This product is built with the highest quality materials and designed to last. Featuring state-of-the-art technology and modern aesthetics.</p>
                            )}
                            {selectedTab === 'specs' && (
                                <ul className="specs-list">
                                    <li><span>Model Name</span> <span>{product.id}</span></li>
                                    <li><span>Color</span> <span>Premium Black</span></li>
                                    <li><span>Weight</span> <span>0.45 kg</span></li>
                                    <li><span>Material</span> <span>High Grade Composite</span></li>
                                </ul>
                            )}
                            {selectedTab === 'reviews' && (
                                <div className="reviews-summary">
                                    <p>No reviews yet for this product. Be the first to review!</p>
                                    <button className="btn-outline-small">Write a Review</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="trust-badges">
                        <div className="badge">
                            <LocalShippingIcon />
                            <span>Fast Delivery</span>
                        </div>
                        <div className="badge">
                            <SecurityIcon />
                            <span>Secure Payment</span>
                        </div>
                        <div className="badge">
                            <VerifiedUserIcon />
                            <span>Genuine Product</span>
                        </div>
                    </div>
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <div className="related-products-section">
                    <h2 className="section-title-small">Related Products</h2>
                    <div className="products-grid">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} addToCartHandler={addToCart} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
