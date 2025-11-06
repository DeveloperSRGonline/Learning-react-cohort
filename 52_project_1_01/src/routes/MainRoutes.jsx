import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import NotFound from '../pages/NotFound'
import Create from '../pages/Create'

const MainRoutes = () => {
  return (
    <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/recipes' element={<Recipes />} />
         <Route path='/create-recipe' element={<Create />} />
         <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes