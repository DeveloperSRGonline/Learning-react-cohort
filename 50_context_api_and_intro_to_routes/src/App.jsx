import React from 'react'
import "./App.css"
import AppRoutes from './components/AppRoutes'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes />
    </div>
  )
}

export default App