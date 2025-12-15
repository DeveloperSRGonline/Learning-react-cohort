import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddProduct } from '../../store/productActions';
import { nanoid } from 'nanoid';

const CreateProduct = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoriesSuggestions = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Toys & Games",
    "Health & Wellness",
    "Furniture",
    "Jewelry & Watches"
  ];

  const CreateProductHandler = (productData) => {
    // Add unique ID
    productData.id = nanoid();
    dispatch(asyncAddProduct(productData));
    navigate('/products');
    reset();
  };

  return (
    <div className='create-product-page'>
      <form onSubmit={handleSubmit(CreateProductHandler)} className='create-product-form'>
        <h1>Create New Product</h1>

        <input
          type="text"
          placeholder='Product Title'
          {...register('title', { required: "Title is required" })}
        />
        {errors.title && <p className="error-msg">{errors.title.message}</p>}

        <textarea
          placeholder='Product Description'
          {...register('description', { required: "Description is required" })}
        ></textarea>
        {errors.description && <p className="error-msg">{errors.description.message}</p>}

        <input
          type="text"
          placeholder='Product Category'
          {...register('category', { required: "Category is required" })}
          list="categories"
        />
        <datalist id="categories">
          {categoriesSuggestions.map((category) => (
            <option key={category} value={category} />
          ))}
        </datalist>
        {errors.category && <p className="error-msg">{errors.category.message}</p>}

        <input
          type="number"
          step="0.01"
          placeholder='Product Price'
          {...register('price', { required: "Price is required", valueAsNumber: true })}
        />
        {errors.price && <p className="error-msg">{errors.price.message}</p>}

        <input
          type="url"
          placeholder='Image URL'
          {...register('image', { required: "Image URL is required" })}
        />
        {errors.image && <p className="error-msg">{errors.image.message}</p>}

        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;