import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-900 text-2xl text-white min-h-screen w-screen font-thin px-[20%] py-10'>
        <Navbar />
        <MainRoutes />
    </div>
  )
}

export default App