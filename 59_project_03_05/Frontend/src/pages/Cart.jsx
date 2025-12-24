import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SecurityIcon from '@mui/icons-material/Security';
import { syncCartWithUser } from '../store/cartActions';
import { useCart } from '../hooks/useCart';
import { ROUTES } from '../constants/apiConstants';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.usersReducer.users);
  const { fullCartItems, removeFromCart, updateQuantity, isLoggedIn } = useCart();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(syncCartWithUser());
    }
  }, [isLoggedIn, dispatch]);

  const subtotal = fullCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const mrpTotal = subtotal * 1.25; // Simulated MRP
  const discount = mrpTotal - subtotal;
  const shipping = subtotal > 500 ? 0 : 40.00;
  const total = subtotal + shipping;

  if (!isLoggedIn) {
    return (
      <div className="empty-cart fade-in">
        <div className="empty-cart-card">
          <ShoppingCartOutlinedIcon className="empty-cart-icon" />
          <h2>Missing Cart items?</h2>
          <p>Login to see the items you added previously</p>
          <button className="btn btn-primary" onClick={() => navigate(ROUTES.LOGIN)} style={{ marginTop: '1rem', padding: '1rem 3rem' }}>
            Login
          </button>
        </div>
      </div>
    );
  }

  if (fullCartItems.length === 0) {
    return (
      <div className="empty-cart fade-in">
        <div className="empty-cart-card">
          <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="empty" style={{ width: '200px', marginBottom: '1rem' }} />
          <h2>Your cart is empty!</h2>
          <p>Add items to it now.</p>
          <button className="btn btn-primary" onClick={() => navigate(ROUTES.HOME)} style={{ marginTop: '1rem', padding: '1rem 3rem' }}>
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-v2 fade-in">
      <div className="cart-container-v2">
        <div className="cart-left-col">
          <div className="cart-address-header glass">
            <div className="addr-info">
              <span>Deliver to: <strong>{user.username}, 10001</strong></span>
              <p>123, Premium Street, Downtown, New York</p>
            </div>
            <button className="btn-outline-small">Change</button>
          </div>

          <div className="cart-items-wrapper">
            {fullCartItems.map((item) => (
              <div key={item.productId} className="cart-item-v2 glass">
                <div className="item-main">
                  <div className="item-img" onClick={() => navigate(`/product/${item.productId}`)}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3 onClick={() => navigate(`/product/${item.productId}`)}>{item.title}</h3>
                    <p className="seller">Seller: Premium Store <VerifiedIcon sx={{ fontSize: 14, color: '#0099ff' }} /></p>
                    <div className="item-pricing">
                      <span className="price">${item.price.toFixed(2)}</span>
                      <span className="old-price">${(item.price * 1.2).toFixed(2)}</span>
                      <span className="offer">20% Off</span>
                    </div>
                  </div>
                  <div className="delivery-est">
                    <p>Delivery by Tue, Dec 30 | <span className="free">Free</span> <span className="old">$40</span></p>
                  </div>
                </div>
                <div className="item-controls">
                  <div className="quantity-group">
                    <button disabled={item.quantity <= 1} onClick={() => updateQuantity(item.productId, item.quantity, -1)}><RemoveIcon fontSize="small" /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productId, item.quantity, 1)}><AddIcon fontSize="small" /></button>
                  </div>
                  <button className="item-action-btn">SAVE FOR LATER</button>
                  <button className="item-action-btn remove" onClick={() => removeFromCart(item.productId)}>REMOVE</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer-actions glass">
            <button className="place-order-btn" onClick={() => alert("Redirecting to Secure Checkout...")}>PLACE ORDER</button>
          </div>
        </div>

        <div className="cart-right-col">
          <div className="price-details-card glass">
            <h3>PRICE DETAILS</h3>
            <div className="price-row">
              <span>Price ({fullCartItems.length} items)</span>
              <span>${mrpTotal.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Discount</span>
              <span className="green">- ${discount.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Delivery Charges</span>
              <span>{shipping === 0 ? <><span className="old">$40</span> <span className="green">FREE</span></> : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="price-row total-amt">
              <span>Total Amount</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="savings-text green">You will save ${discount.toFixed(2)} on this order</p>
          </div>

          <div className="coupons-card glass">
            <h4><LocalOfferIcon fontSize="small" /> Apply Coupons</h4>
            <div className="coupon-input">
              <input type="text" placeholder="Enter coupon code" />
              <button>APPLY</button>
            </div>
          </div>

          <div className="trust-info">
            <SecurityIcon sx={{ color: '#888' }} />
            <p>Safe and Secure Payments. 100% Authentic products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
