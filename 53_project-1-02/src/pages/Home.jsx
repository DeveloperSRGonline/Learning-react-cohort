import React, { useEffect } from 'react'
import axios from '../utils/axios'

const Home = () => {
  const getData = async () => {
    try {
      const response = await axios.get('/products')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <h1>Home</h1>
      <button onClick={getData}>Get Products</button>
    </div>
  )
}

export default Home