import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductsDetails = () => {
  const navigate = useNavigate()
    const params = useParams()

    const handleBack = () => {
        navigate('/product')
    }
  return (
    <div>
        <h3>{params.name}</h3>
        <button onClick={handleBack}>Back</button>
    </div>
  )
}

export default ProductsDetails