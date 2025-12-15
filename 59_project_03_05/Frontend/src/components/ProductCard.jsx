import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/admin/update-product/${product.id}`)
  }
  return (
    <div onClick={handleClick} className='product-ProductCard '>
      <div className='product-image-container'>
        <img src={product.image} alt={product.title} className='product-image' />
      </div>
      <div className='product-info'>
        <h2 className='product-title'>{product.title}</h2>
        <p className='product-category'>{product.category}</p>
        <p className='product-description'>{product.description.slice(0, 80)}...</p>
        <div className='product-footer'>
          <p className='product-price'>${product.price}</p>
          <button className='btn-add-cart'>Add to Cart</button>
        </div>
      </div>
    </div>  
  )
}

export default ProductCard