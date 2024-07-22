const express = require('express');
const router = express.Router();
const Recipes = require('../Models/Recipes');
const verifyToken = require('../Middleware/authMiddleware');

// Add Recipe
router.post('/addrecipe', verifyToken, async (req, res) => {
    try {
        const { name, ingredient, description, price } = req.body;
        const newRecipe = new Recipes({
            name,
            ingredient,
            description,
            price,
            userId: req.userId, // Set the userId from the token
        });
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error('Error adding recipe:', error);
        res.status(500).json({ error: 'Failed to add Recipe' });
    }
});

// Get Recipes
router.get('/recipes', verifyToken, async (req, res) => {
    try {
        const recipes = await Recipes.find({ userId: req.userId }); // Fetch recipes for the logged-in user
        res.status(200).json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

module.exports = router;
