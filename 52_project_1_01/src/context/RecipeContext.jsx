import React, { createContext, useState } from 'react'

export const RecipeContextProvider = createContext(null)

const RecipeContext = (props) => {
    const [data, setdata] = useState([])
    // console.log(data)
  return (
    <RecipeContextProvider.Provider value={{data,setdata}}>{props.children}</RecipeContextProvider.Provider>
  )
}

export default RecipeContext