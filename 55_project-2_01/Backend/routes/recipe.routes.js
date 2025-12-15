const express = require("express");
const { createRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } = require("../controllers/recipe.controllers");
const { verifyToken } = require("../middlewares/auth.middleware");
const router = express.Router();

// for  recipe create
router.post("/", verifyToken, createRecipe)

// for  recipe get
router.get("/", verifyToken, getRecipes)

// for my recipe
router.get("/my", verifyToken, getMyRecipes)

// for  recipe get by id
router.get("/:id", verifyToken, getRecipe)

// for  recipe update
router.put("/:id", verifyToken, updateRecipe)

// for  recipe delete
router.delete("/:id", verifyToken, deleteRecipe)

module.exports = router;