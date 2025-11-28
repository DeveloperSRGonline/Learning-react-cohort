import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { recipeContextProvider } from '../context/RecipeContext'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const RecipeDetail = () => {
  // getting id from the params using useParams hook
  const { id } = useParams();
  const navigate = useNavigate();

  // getting data from the context
  const { data, setdata } = useContext(recipeContextProvider);

  // finding the target recipe
  const targetRecipe = data.find(recipe => recipe.id === id)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: targetRecipe?.title || '',
      image: targetRecipe?.image || '',
      description: targetRecipe?.description || '',
      ingredients: targetRecipe?.ingredients || '',
      instructions: targetRecipe?.instructions || '',
      category: targetRecipe?.category || '',
    },
  });


  const submitHandler = (formdata) => {
    // update the existing recipe
    const updatedRecipe = { ...targetRecipe, ...formdata };

    // update the data array
    const updatedData = data.map(r => r.id === id ? updatedRecipe : r);

    setdata(updatedData);

    // sending success message
    toast.success("Recipe Updated Successfully!")
    // reset the form inputs 
    reset();
  };

  const deleteHandler = (id) => {
    // filter out the target recipe
    const updatedData = data.filter(r => r.id !== id);

    // update the data array in context
    setdata(updatedData);

    // sending success message
    toast.success("Recipe Deleted Successfully!");

    // navigate back to the home page or recipe list
    navigate('/recipes');
  };


  const listIngredients = targetRecipe?.ingredients?.split(',').map((d, i) => <li className='list-disc ml-3' key={i}>{d}</li>)


  const listInstructions = targetRecipe?.instructions?.split(';').map((d, i) => <li className='list-decimal ml-3' key={i}>{d}</li>)



  return targetRecipe ? <div className='flex w-full justify-between gap-10 items-start'>
    <div className='left w-[50%] p-5 bg-gray-800 rounded-lg shadow-lg'>
      <h1 className='text-4xl font-bold mb-4 text-orange-500'>{targetRecipe.title}</h1>
      <img className='w-full h-64 object-cover rounded-md mb-4' src={targetRecipe.image} alt={targetRecipe.title} />
      <p className='text-gray-300 mb-4'>{targetRecipe.description}</p>

      <h3 className='text-xl font-semibold mb-2 text-orange-400'>Ingredients</h3>
      <ul className='list-disc pl-5 mb-4 text-gray-300'>
        {listIngredients}
      </ul>

      <h3 className='text-xl font-semibold mb-2 text-orange-400'>Instructions</h3>
      <ol className='list-decimal pl-5 mb-4 text-gray-300'>
        {listInstructions}
      </ol>

      <p className='text-sm text-gray-400 uppercase tracking-wider'>Category: {targetRecipe.category}</p>
    </div>

    <div className='right w-[50%] p-5 bg-gray-800 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-orange-500'>Edit Recipe</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Title</label>
          <input
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none"
            {...register("title", { required: "Title is required" })}
            type="text"
          />
        </div>

        {/* Image Link */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Image URL</label>
          <input
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none"
            {...register("image", { required: "Image link is required" })}
            type="url"
            placeholder="Recipe Image URL"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Description</label>
          <textarea
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none h-24 resize-none"
            {...register("description", { required: "Description is required" })}
            placeholder="Recipe Description"
          />
        </div>

        {/* Ingredients */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Ingredients (comma separated)</label>
          <textarea
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none h-24 resize-none"
            {...register("ingredients", { required: "Ingredients is required" })}
            placeholder="Recipe ingredients"
          />
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Instructions (step-by-step or comma separated)</label>
          <textarea
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none h-24 resize-none"
            {...register("instructions", { required: "Instructions is required" })}
            placeholder="Recipe Instructions"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Category</label>
          <select
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none"
            {...register("category", { required: "Category is required" })}
            defaultValue=""
          >
            <option value="" disabled className="text-gray-400">
              Select a Category
            </option>
            <option value="main_dish">Main Dish</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
            <option value="breakfast">Breakfast</option>
          </select>
        </div>

        <button className="mt-4 p-3 w-full bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition duration-150 shadow-md">
          Update Recipe
        </button>
        <button
          type="button"
          className="mt-2 p-3 w-full bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-150 shadow-md"
          onClick={() => deleteHandler(targetRecipe.id)}
        >
          Delete
        </button>
      </form>
    </div>
  </div> : <div className="text-white text-2xl text-center mt-10">Loading...</div>
}

export default RecipeDetail;