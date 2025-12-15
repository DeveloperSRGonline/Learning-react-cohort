import React from 'react'
import RecipeCard from '../Components/RecipeCard'

const Favourite = () => {
  const favs = JSON.parse(localStorage.getItem('fav')) || [];

  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold mb-10 text-orange-500'>My Favorites</h1>
      <div className='flex gap-10 flex-wrap'>
        {favs.length > 0 ? favs.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        )) : <p className='text-gray-400'>No favorite recipes yet.</p>}
      </div>
    </div>
  )
}

export default Favourite