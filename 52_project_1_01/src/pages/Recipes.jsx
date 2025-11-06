import { useContext } from 'react'
import { RecipeContextProvider } from '../context/RecipeContext'

const Recipes = () => {
  const {data} = useContext(RecipeContextProvider)
  const renderRecipes = data.map((recipe,index) => {
    return <div key={index}>
      <h1>{recipe.title}</h1>
    </div>
  })
  return (
    <div>{renderRecipes}</div>
  )
}

export default Recipes