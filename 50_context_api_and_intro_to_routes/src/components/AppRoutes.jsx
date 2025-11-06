import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Service from './Service'
import NotFound from './NotFound'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoutes