const { Schema} =require('mongoose');
const { model} =require('mongoose');

const recipeSchema = new Schema({
   title: { type: String, required: true },
   recipeType: { type: String, required: true},
   ingredients: { type: String, required: true },
   recipeInstructions: { type: String, required: true },
   });

const recipies = model('recipies', recipeSchema);

module.exports = recipies;
