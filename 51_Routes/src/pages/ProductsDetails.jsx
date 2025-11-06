import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./ProductsDetails.css"

const ProductsDetails = () => {
    const navigate = useNavigate();
    const params = useParams();

  return (
    <div className="product-details-container">
      <h1>{params.name}</h1>
      <button onClick={() => navigate("/products")}>Go Back</button>
    </div>
  )
}

export default ProductsDetails