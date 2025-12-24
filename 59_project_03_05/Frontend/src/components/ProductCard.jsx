import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../constants/apiConstants';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProductCard = ({ product, addToCartHandler }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.usersReducer.users);

  const isUserAdmin = user?.isAdmin;

  const handleCardClick = () => {
    if (isUserAdmin) {
      navigate(ROUTES.ADMIN_UPDATE(product.id));
    } else {
      navigate(`/product/${product.id}`);
    }

  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCartHandler(product.id);
  };

  return (
    <div onClick={handleCardClick} className='product-card-premium fade-in'>
      <div className='product-badge'>New Arrival</div>
      <div className='product-image-container-premium'>
        <img src={product.image} alt={product.title} className='product-image-premium' />
        <div className="product-overlay-premium">
          <button className="quick-view-btn">
            <VisibilityIcon fontSize="small" />
          </button>
          <button className="add-to-cart-overlay-btn" onClick={handleAddToCart}>
            <AddShoppingCartIcon fontSize="small" />
          </button>
        </div>
      </div>
      <div className='product-info-premium'>
        <div className="product-category-text">{product.category}</div>
        <h2 className='product-title-premium'>{product.title}</h2>
        <div className='product-footer-premium'>
          <p className='product-price-premium'>${product.price.toFixed(2)}</p>
          <button onClick={handleAddToCart} className='add-to-cart-text-btn'>
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;