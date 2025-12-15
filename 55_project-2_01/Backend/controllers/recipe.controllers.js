const recipeModel = require("../models/recipe.model");

// create recipe
const createRecipe = async (req, res) => {
    try {
        const recipe = await recipeModel.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await recipeModel.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get my recipes
const getMyRecipes = async (req, res) => {
    try {
        const recipes = await recipeModel.find({ user: req.user.id });
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get recipe by id
const getRecipe = async (req, res) => {
    try {
        const recipe = await recipeModel.findById(req.params.id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update recipe
const updateRecipe = async (req, res) => {
    try {
        const recipe = await recipeModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// delete recipe
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await recipeModel.findByIdAndDelete(req.params.id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe
}