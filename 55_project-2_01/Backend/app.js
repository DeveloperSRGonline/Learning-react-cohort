const cookieParser = require("cookie-parser");
const express = require("express");
const authRoutes = require("./routes/auth.routes");
const recipeRoutes = require("./routes/recipe.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/recipe", recipeRoutes);


module.exports = app;   