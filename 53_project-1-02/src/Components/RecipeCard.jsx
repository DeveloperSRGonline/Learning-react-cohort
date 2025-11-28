import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    // destructring the recipe data comming in props
    const {id,title,image,description,ingredients,instructions,category} = props.recipe;

    
  return (
    <Link to={`/recipes/details/${id}`} className='block w-[23vw] overflow-hidden border border-gray-600 rounded-xl p-4 hover:scale-103 transition-transform duration-400'>
        <img className='w-full h-[20vh] object-cover rounded' src={image} alt="" />
        <h1 className='my-2 font-black'>{title}</h1>
        <p>{description.slice(0,100)}...{""}</p>
        <small className='text-blue-400'>more</small>
    </Link>
  )
}

export default RecipeCard