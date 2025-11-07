import React, { useContext } from 'react'
import { recipeContextProvider } from '../context/RecipeContext'

const Recipes = () => {
  const {data,setdata} = useContext(recipeContextProvider)
  const renderRecipes = data.map((recipe)=> <div key={recipe.id}>{recipe.title}</div>)
  return (
    <div>{renderRecipes}</div>
  )
}

export default Recipes