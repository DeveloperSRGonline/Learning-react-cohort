import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/Loader'
import AuthWrapper from '../components/AuthWrapper'
import PublicRoute from '../components/PublicRoute'

// Lazy Loading Components
const Products = lazy(() => import('../pages/Products'))
const Register = lazy(() => import('../pages/Register'))
const Login = lazy(() => import('../pages/Login'))
const Cart = lazy(() => import('../pages/Cart'))
const Profile = lazy(() => import('../pages/Profile'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'))
const UpdateProduct = lazy(() => import('../pages/admin/UpdateProduct'))
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'))
const ProductDetails = lazy(() => import('../pages/ProductDetails'))

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
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
    </Suspense>
  )
}

export default MainRoutes;