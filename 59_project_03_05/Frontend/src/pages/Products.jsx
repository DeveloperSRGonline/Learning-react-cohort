import React from 'react'

import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Products = () => {

  const products = useSelector((state) => state.productsReducer.products)

  const renderProducts = products.map((product) => {
    return <ProductCard key={product.id} product={product} />
  })

  return products && products.length > 0 ? <div className='products'>{renderProducts}</div> : <div>Loading...</div>
}

export default Products