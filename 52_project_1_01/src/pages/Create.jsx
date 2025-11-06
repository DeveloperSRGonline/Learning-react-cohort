import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeContextProvider } from "../context/RecipeContext";

const Create = () => {
  const {data,setdata } = useContext(RecipeContextProvider)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid()
    
    // const copydata = [...data]
    // copydata.push(recipe)
    // setdata(copydata)

    setdata([...data,recipe])
    reset();
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipt title here"
      />
      <small className="text-red-500">This is how error will show</small>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image url here..."
      />
      <textarea
        className="block border-b outline-0 p-2"
        {...register("description")}
        type="url"
        placeholder="Description goes here..."
      />
      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingredients")}
        type="url"
        placeholder="Ingridients seperated by comma..."
      />
      <textarea
        className="block border-b outline-0 p-2"
        {...register("instructions")}
        type="url"
        rows={5}
        placeholder="instructions seperated by comma..."
      />
      <select
        className="block border-b outline-0 p-2"
        {...register("category")}
      >
        <option value="cat 1">Category 1</option>
        <option value="cat 2">Category 2</option>
        <option value="cat 3">Category 3</option>
      </select>
      
      <button className="block mt-5">Create Recipe</button>
    </form>
  );
};

export default Create;
