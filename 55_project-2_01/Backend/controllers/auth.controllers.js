const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ name, email, password: hashedPassword });
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMe = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addToFavourites = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id);
        user.favourites.push(req.body.id);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getFavourites = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id);
        res.status(200).json(user.favourites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    register,
    login,
    logout,
    getMe,
    addToFavourites,
    getFavourites
}

