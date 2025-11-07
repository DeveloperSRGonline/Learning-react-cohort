import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-x-10 text-lg mb-10 font-medium'>
        <NavLink className={(e)=> e.isActive ? "text-orange-400" : ""} to='/'>Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-orange-400" : ""} to='/about'>About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-orange-400" : ""} to='/recipes'>Recipes</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-orange-400" : ""} to='/create'>Create</NavLink>
    </div>
  )
}

export default Navbar