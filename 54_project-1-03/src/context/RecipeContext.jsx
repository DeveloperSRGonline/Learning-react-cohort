import React, { createContext, useState } from 'react'

export const recipeContextProvider = createContext(null)

const RecipeContext = (props) => {

  const [data, setdata] = useState(JSON.parse(localStorage.getItem('recipes')) || [])
  return (
    <recipeContextProvider.Provider value={{ data, setdata }}>{props.children}</recipeContextProvider.Provider>
  )
}

export default RecipeContext;