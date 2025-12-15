import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Profile from '../pages/profile'
import PageNotFound from '../pages/PageNotFound'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'
import AuthWrapper from '../components/AuthWrapper'
import AdminDashboard from '../pages/admin/AdminDashboard'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/admin/create-product" element={
        <AuthWrapper>
          <CreateProduct />
        </AuthWrapper>} />
      <Route path="/admin/update-product/:id" element={
        <AuthWrapper>
          <UpdateProduct />
        </AuthWrapper>
      } />
      <Route path="/admin" element={
        <AuthWrapper>
          <AdminDashboard />
        </AuthWrapper>
      } />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes;