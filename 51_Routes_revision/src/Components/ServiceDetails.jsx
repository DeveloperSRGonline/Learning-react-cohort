import React from 'react'
import { useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/service')
    }
  return (
    <div>
        This is service details page thanks for visiting our website
        <br />
        <button onClick={handleBack} >Go back</button>
    </div>
  )
}

export default ServiceDetails