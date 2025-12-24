import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddProduct } from '../../store/productActions';
import { nanoid } from 'nanoid';
import { ROUTES } from '../../constants/apiConstants';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const CreateProduct = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const imageUrl = watch('image');

  const categoriesSuggestions = [
    "Electronics", "Clothing", "Books", "Home & Kitchen", "Beauty & Personal Care",
    "Sports & Outdoors", "Toys & Games", "Health & Wellness", "Furniture", "Jewelry & Watches"
  ];

  const CreateProductHandler = async (productData) => {
    setIsSubmitting(true);
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1000));

    productData.id = nanoid();
    dispatch(asyncAddProduct(productData));
    navigate(ROUTES.HOME);
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className='create-product-page-v2 fade-in'>
      <div className="create-product-container glass">
        <div className="form-header">
          <h2><Inventory2Icon fontSize="large" /> Add New Product</h2>
          <p>Expand your catalog with premium items.</p>
        </div>

        <form onSubmit={handleSubmit(CreateProductHandler)} className='create-product-form-v2'>
          <div className="form-grid">
            {/* Left Column - Inputs */}
            <div className="form-inputs">
              <div className="form-group">
                <label>Product Title</label>
                <input
                  type="text"
                  placeholder='e.g. Wireless Noise Cancelling Headphones'
                  {...register('title', { required: "Title is required" })}
                />
                {errors.title && <span className="error-text">{errors.title.message}</span>}
              </div>

              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  placeholder='Select or type category'
                  {...register('category', { required: "Category is required" })}
                  list="categories"
                />
                <datalist id="categories">
                  {categoriesSuggestions.map((category) => (
                    <option key={category} value={category} />
                  ))}
                </datalist>
                {errors.category && <span className="error-text">{errors.category.message}</span>}
              </div>

              <div className="form-group half-width">
                <label>Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder='0.00'
                  {...register('price', { required: "Price is required", valueAsNumber: true })}
                />
                {errors.price && <span className="error-text">{errors.price.message}</span>}
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  placeholder='https://example.com/image.jpg'
                  {...register('image', { required: "Image URL is required" })}
                />
                {errors.image && <span className="error-text">{errors.image.message}</span>}
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder='Describe the key features and benefits...'
                  rows="5"
                  {...register('description', { required: "Description is required" })}
                ></textarea>
                {errors.description && <span className="error-text">{errors.description.message}</span>}
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="form-preview">
              <h3>Preview</h3>
              <div className="preview-card">
                {imageUrl ? (
                  <img src={imageUrl} alt="Preview" onError={(e) => e.target.src = 'https://via.placeholder.com/300?text=Invalid+Image+URL'} />
                ) : (
                  <div className="placeholder-preview">
                    <CloudUploadIcon style={{ fontSize: 60, color: '#555' }} />
                    <p>Enter an image URL to see preview</p>
                  </div>
                )}
              </div>
              <div className="preview-info">
                {watch('title') && <h4>{watch('title')}</h4>}
                {watch('price') && !isNaN(watch('price')) && <span className="preview-price">${Number(watch('price')).toFixed(2)}</span>}
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type='button' className="btn-cancel" onClick={() => navigate(ROUTES.HOME)}>Cancel</button>
            <button type='submit' className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Publishing...' : 'Publish Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;