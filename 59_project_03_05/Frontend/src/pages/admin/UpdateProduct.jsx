import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { asyncUpdateProduct } from '../../store/productActions'
import { useDispatch } from 'react-redux'
import { asyncDeleteProduct } from '../../store/productActions'
import { useNavigate } from 'react-router-dom'


const UpdateProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector(
    (state) => state.productsReducer.products
  )

  const user = useSelector(
    (state) => state.usersReducer?.users
  )
  // for finding the 
  const targetProduct = products && products.find((product) => product.id === id)

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      title: targetProduct?.title,
      price: targetProduct?.price,
      description: targetProduct?.description,
      category: targetProduct?.category,
      image: targetProduct?.image
    }
  })

  // for reseting the form
  useEffect(() => {
    if (targetProduct) {
      reset(targetProduct)
    }
  }, [targetProduct, reset])


  // for updating on submit
  const onSubmit = (product) => {
    dispatch(asyncUpdateProduct(id, product))
    navigate('/admin')
  }

  // for deleting
  const deleteHandler = (id) => {
    dispatch(asyncDeleteProduct(id))
    navigate('/admin')
  }

  return (
    <div className="update-product-page" style={targetProduct?.image ? { backgroundImage: `url(${targetProduct.image})` } : {}}>
      <div className="page-overlay"></div>
      {user && user.isAdmin ? (
        <form onSubmit={handleSubmit(onSubmit)} className="update-product-form">
          <h2>Update Product</h2>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" {...register('title')} />
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" {...register('price')} />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" {...register('description')}></textarea>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" {...register('category')} />
          <label htmlFor="image">Image:</label>
          <input type="url" id="image" name="image" {...register('image')} />
          <button type="submit">Update Product</button>
          <button className='delete-product-btn' type="button" onClick={() => deleteHandler(targetProduct.id)}>Delete Product</button>
        </form>
      ) : (
        <div className="update-product-form">
          <h2>Product Details</h2>
          <img src={targetProduct?.image} alt={targetProduct?.title} style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem', maxHeight: '250px', objectFit: 'cover' }} />
          <h3 style={{ color: 'white' }}>{targetProduct?.title}</h3>
          <p style={{ color: '#ccc', margin: '0.5rem 0' }}>Category: <span style={{ color: '#0099ff' }}>{targetProduct?.category}</span></p>
          <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>${targetProduct?.price}</p>
          <p style={{ color: '#aeaeae', lineHeight: '1.5' }}>{targetProduct?.description}</p>
        </div>
      )}
    </div>
  )
}

export default UpdateProduct;