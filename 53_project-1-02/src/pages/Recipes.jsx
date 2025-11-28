import React, { useContext } from "react";
import { recipeContextProvider } from "../context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  // getting data from the context(the central store)
  const { data, setdata } = useContext(recipeContextProvider);

  // rendering all recipes present in the data array
  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return <div className="flex gap-10 flex-wrap">
    {/* when data is available then render the recipes else show no recipes found */}
    {data.length > 0 ? renderRecipes : "No Recipes Found"}
  </div>;
};

export default Recipes;
