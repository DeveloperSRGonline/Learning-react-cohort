import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContextProvider } from "../context/RecipeContext";

const Create = () => {
  const {data,setdata} = useContext(recipeContextProvider)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (formdata) => {
    formdata.id = nanoid()
    setdata([...data,formdata])
    reset();
  };

  const inputClass =
    "border-b text-orange-100 mb-3 p-2 w-full block outline-0 border-orange-300 placeholder-orange-100";

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="min-w-full">
      {/* Title */}
      <input
        className={inputClass}
        {...register("title", { required: "Title is required" })}
        type="text"
        placeholder="Recipe Title"
      />

      {/* Image Link */}
      <input
        className={inputClass}
        {...register("image", { required: "Image link is required" })}
        type="url"
        placeholder="Recipe Image URL"
      />

      {/* Description */}
      <textarea
        className={inputClass}
        {...register("description", { required: "Description is required" })}
        placeholder="Recipe Description"
      />

      {/* Ingredients */}
      <textarea
        className={inputClass}
        {...register("ingredients", { required: "Ingredients is required" })}
        placeholder="Recipe ingredients (comma separated)"
      />

      {/* Instructions */}
      <textarea
        className={inputClass}
        {...register("instructions", { required: "Instructions is required" })}
        placeholder="Recipe Instructions (step-by-step or comma separated)"
      />

      <select
        className="border-b mb-3 p-2 w-full block outline-0 border-orange-300 placeholder-orange-300 appearance-none bg-white dark:bg-gray-800 dark:text-orange-100"
        {...register("category", { required: "Category is required" })}
        defaultValue=""
      >
        <option value="" disabled className="text-gray-400 dark:text-gray-400">
          Select a Category
        </option>
        <option value="main_dish" className="dark:bg-gray-800 dark:text-white">
          Main Dish
        </option>
        <option value="dessert" className="dark:bg-gray-800 dark:text-white">
          Dessert
        </option>
        <option value="appetizer" className="dark:bg-gray-800 dark:text-white">
          Appetizer
        </option>
        <option value="breakfast" className="dark:bg-gray-800 dark:text-white">
          Breakfast
        </option>
      </select>

      <button className="mt-4 p-2 w-full bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-150">
        Create Recipe
      </button>
    </form>
  );
};

export default Create;
