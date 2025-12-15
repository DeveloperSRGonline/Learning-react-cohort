const express = require("express");
const router = express.Router()

// to register user
router.post("/register", register)

// to login user
router.post("/login", login)

// to get profile
router.get("/me", verifyToken, getMe)

// to logout user
router.post("/logout", logout)

// to add to favourites
router.post('/favourites/:id', verifyToken, addToFavourites)

// to remove from favourites
router.get('/favourites', verifyToken, getFavourites)


module.exports = router;