const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Recipe title is required"],
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Image URL is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    ingredients: {
        type: String,
        required: [true, "Ingredients are required"],
    },
    instructions: {
        type: String,
        required: [true, "Instructions are required"],
    },
    category: {
        type: String,
        enum: ["main_dish", "dessert", "appetizer", "breakfast"],
        required: [true, "Category is required"],
    },
}, { timestamps: true });

module.exports = mongoose.model("Recipe", recipeSchema);