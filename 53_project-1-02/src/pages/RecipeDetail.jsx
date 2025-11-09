import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContextProvider } from "../context/RecipeContext";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

const splitToList = (str, separator = ",") => {
  if (!str) return [];
  return str.split(separator).map((item) => ({ value: item.trim() }));
};

const RecipeDetail = () => {
  const { data, setdata } = useContext(recipeContextProvider);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedRecipe = data.find((recipe) => recipe.id == id);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      title: selectedRecipe?.title,
      image: selectedRecipe?.image,
      description: selectedRecipe?.description,
      category: selectedRecipe?.category,
      ingredients: splitToList(selectedRecipe?.ingredients, ","),
      instructions: splitToList(selectedRecipe?.instructions, ";"),
    },
  });

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: appendInstruction,
    remove: removeInstruction,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const watchedValues = watch();

  useEffect(() => {
    if (!isDirty) return;

    const timer = setTimeout(() => {
      const formData = watchedValues;
      const ingredientsString = formData.ingredients
        .map((item) => item.value.trim())
        .join(",");
      const instructionsString = formData.instructions
        .map((item) => item.value.trim())
        .join(";");

      const updatedRecipe = {
        ...selectedRecipe,
        ...formData,
        ingredients: ingredientsString,
        instructions: instructionsString,
      };

      const updatedData = data.map((recipe) =>
        recipe.id == id ? updatedRecipe : recipe
      );

      setdata(updatedData);
      toast.success("Changes auto-saved!");
      reset(formData);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    JSON.stringify(watchedValues),
    isDirty,
    setdata,
    id,
    selectedRecipe,
    data,
    reset,
  ]);

  const submitHandler = (formData) => {
    const ingredientsString = formData.ingredients
      .map((item) => item.value.trim())
      .join(",");
    const instructionsString = formData.instructions
      .map((item) => item.value.trim())
      .join(";");

    const updatedRecipe = {
      ...selectedRecipe,
      ...formData,
      ingredients: ingredientsString,
      instructions: instructionsString,
    };

    const updatedData = data.map((recipe) =>
      recipe.id == id ? updatedRecipe : recipe
    );

    setdata(updatedData);
    toast.success("Recipe Updated Successfully!");
    navigate("/recipes");
  };

  if (!selectedRecipe) {
    return "Loading...";
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {/* --- Title, Image, Description (Same as before) --- */}
      <input
        className="font-medium text-center mb-4 text-5xl w-full bg-transparent text-gray-300 focus:outline-0 outline-none"
        {...register("title", { required: "Title is required" })}
        type="text"
      />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <img
        className="w-[70vw] h-[20vw] object-cover rounded-xl my-5"
        src={selectedRecipe.image}
        alt={selectedRecipe.title}
      />
      <input
        className="text-lg w-full bg-gray-800 text-gray-300 focus:outline-0 outline-none p-2 rounded mb-4"
        {...register("image", { required: "Image URL is required" })}
        type="text"
      />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}

      <textarea
        className="text-3xl text-gray-400 w-full bg-transparent focus:outline-0 outline-none"
        rows="3"
        {...register("description", { required: "Description is required" })}
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}

      {/* --- Ingredients List --- */}
      <h2 className="text-5xl my-4 font-medium text-amber-100">Ingredients:</h2>
      <div className="flex flex-col gap-2">
        {ingredientFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center">
            <input
              className="text-xl w-full bg-gray-800 text-gray-300 focus:outline-0 outline-none p-2 rounded"
              {...register(`ingredients.${index}.value`)}
            />
            <button
              type="button"
              className="px-4 py-2 text-white font-medium bg-red-600 text-xs rounded"
              onClick={() => removeIngredient(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="px-4 py-2 text-white font-medium bg-green-700 rounded mt-2 self-start"
          onClick={() => appendIngredient({ value: "" })}
        >
          Add Ingredient
        </button>
      </div>

      {/* --- Instructions List --- */}
      <h2 className="text-5xl my-4 font-medium text-amber-100">
        Instructions:
      </h2>
      <div className="flex flex-col gap-2">
        {instructionFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center">
            <input
              className="text-xl w-full bg-gray-800 text-gray-300 focus:outline-0 outline-none p-2 rounded"
              {...register(`instructions.${index}.value`)}
            />
            <button
              type="button"
              className="px-4 py-2 text-white font-medium text-xs bg-red-600 rounded"
              onClick={() => removeInstruction(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="px-4 py-2 text-white font-medium bg-green-700 rounded mt-2 self-start"
          onClick={() => appendInstruction({ value: "" })}
        >
          Add Instruction
        </button>
      </div>

      {/* --- Category (Same as before) --- */}
      <h2 className="text-5xl my-4 font-medium">Category:</h2>
      <input
        className="font-normal text-amber-400 text-3xl w-full bg-transparent focus:outline-0 outline-none"
        {...register("category", { required: "Category is required" })}
        type="text"
      />
      {errors.category && (
        <p className="text-red-500">{errors.category.message}</p>
      )}

      {/* --- Buttons (Same as before) --- */}
      <div className="flex gap-4 my-8">
        <button
          type="submit"
          className="px-10 py-1.5 text-white font-medium bg-green-700 rounded-full "
        >
          Save Changes
        </button>
        <button
          type="button"
          className="px-10 py-1.5 text-white font-medium bg-red-700 rounded-full "
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default RecipeDetail;