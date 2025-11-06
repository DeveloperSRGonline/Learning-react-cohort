import React from 'react'
import "./App.css"
import MainRoutes from './Routes/MainRoutes'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes />
    </div>
  )
}

export default App