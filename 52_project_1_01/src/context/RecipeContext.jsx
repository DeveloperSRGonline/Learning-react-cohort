import React, { createContext, useState } from 'react'

export const recipeContextProvider = createContext(null)

const RecipeContext = (props) => {
    const [data, setdata] = useState([])
    console.log(data);
  return (
    <recipeContextProvider.Provider value={{data, setdata}}>{props.children}</recipeContextProvider.Provider>
  )
}

export default RecipeContext