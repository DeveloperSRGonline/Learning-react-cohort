import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='py-10 px-[20%] text-white bg-gray-900 font-thin w-full min-h-screen'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App