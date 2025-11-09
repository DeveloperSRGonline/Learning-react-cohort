import React, { createContext, useState } from 'react'

export const recipeContextProvider = createContext(null)

const RecipeContext = (props) => {
  const initialRecipes = [
    {
      id: 'r1',
      title: 'Spaghetti Bolognese',
      image: 'https://assets.tmecosys.cn/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/d1b38708de15e20816113dc7c447ab99/Derivates/563c08eba9aa94895a39fb0249fecda402d92e28.jpg',
      description: 'Classic Italian pasta with a rich, meaty tomato sauce.',
      ingredients: 'spaghetti, ground beef, tomato sauce, onion, garlic, olive oil, salt, pepper',
      instructions: 'Cook pasta; Sauté onion and garlic; Brown beef; Add tomato sauce and simmer; Combine with pasta',
      category: 'main_dish'
    },
    {
      id: 'r2',
      title: 'Chocolate Brownies',
      image: 'https://i.ytimg.com/vi/qdxqip0Bgt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPjO2A80XRgLsPVseoe9Q8KzCccA',
      description: 'Fudgy chocolate brownies with a crackly top.',
      ingredients: 'dark chocolate, butter, sugar, eggs, flour, cocoa powder, salt',
      instructions: 'Melt chocolate and butter; Mix in sugar and eggs; Fold in dry ingredients; Bake',
      category: 'dessert'
    },
    {
      id: 'r3',
      title: 'Bruschetta',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      description: 'Toasted bread rubbed with garlic and topped with fresh tomatoes and basil.',
      ingredients: 'baguette, tomatoes, basil, garlic, olive oil, salt, pepper',
      instructions: 'Toast bread; Mix tomatoes with basil and oil; Rub bread with garlic; Top and serve',
      category: 'appetizer'
    },
    {
      id: 'r4',
      title: 'Fluffy Pancakes',
      image: 'https://annabanana.co/wp-content/uploads/2020/01/Classic-Fluffy-Pancakes-5.jpg',
      description: 'Light and fluffy pancakes perfect for breakfast.',
      ingredients: 'flour, milk, egg, baking powder, sugar, salt, butter',
      instructions: 'Mix dry ingredients; Whisk in milk and egg; Cook on griddle until golden',
      category: 'breakfast'
    }
  ]

  const [data, setdata] = useState(initialRecipes)
  return (
    <recipeContextProvider.Provider value={{data, setdata}}>{props.children}</recipeContextProvider.Provider>
  )
}

export default RecipeContext