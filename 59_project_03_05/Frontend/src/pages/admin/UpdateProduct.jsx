import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { asyncUpdateProduct, asyncDeleteProduct } from '../../store/productActions';
import { ROUTES } from '../../constants/apiConstants';

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.productsReducer.products);
  const user = useSelector((state) => state.usersReducer?.users);

  const targetProduct = products?.find((product) => product.id === id);

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      title: targetProduct?.title,
      price: targetProduct?.price,
      description: targetProduct?.description,
      category: targetProduct?.category,
      image: targetProduct?.image
    }
  });

  useEffect(() => {
    if (targetProduct) {
      reset(targetProduct);
    }
  }, [targetProduct, reset]);

  const onSubmit = (productData) => {
    dispatch(asyncUpdateProduct(id, productData));
    navigate(ROUTES.ADMIN);
  };

  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(asyncDeleteProduct(id));
      navigate(ROUTES.ADMIN);
    }
  };

  if (!targetProduct) {
    return (
      <div className="update-product-page">
        <div className="page-overlay"></div>
        <h2>Product not found</h2>
        <button onClick={() => navigate(ROUTES.HOME)}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="update-product-page" style={{ backgroundImage: `url(${targetProduct.image})` }}>
      <div className="page-overlay"></div>

      <div className="update-product-form-container">
        {user?.isAdmin ? (
          <form onSubmit={handleSubmit(onSubmit)} className="update-product-form fade-in">
            <h2>Update Product</h2>
            <div className="form-group">
              <label>Title</label>
              <input type="text" {...register('title')} />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" step="0.01" {...register('price')} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea {...register('description')}></textarea>
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" {...register('category')} />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input type="url" {...register('image')} />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">Save Changes</button>
              <button type="button" className="btn-danger" onClick={deleteHandler}>Delete Product</button>
            </div>
          </form>
        ) : (
          <div className="update-product-form fade-in">
            <h2>Product Details</h2>
            <img src={targetProduct.image} alt={targetProduct.title} style={{ width: '100%', borderRadius: '15px', marginBottom: '1.5rem', maxHeight: '300px', objectFit: 'contain', background: 'white', padding: '10px' }} />
            <h3 className="product-title-large">{targetProduct.title}</h3>
            <p className="product-category-tag">{targetProduct.category}</p>
            <p className="product-price-large">${targetProduct.price}</p>
            <p className="product-description-full">{targetProduct.description}</p>
            <button className="btn-secondary" onClick={() => navigate(-1)} style={{ marginTop: '1.5rem', width: '100%' }}>Go Back</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateProduct;