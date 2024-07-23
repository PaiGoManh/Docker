/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddrecipePage = () => {
  const [title, setTitle] = useState('');
  const [recipeType, setrecipeType] = useState('')
  const [ingredients, setingredients] = useState('');
  const [recipeInstructions, setrecipeInstructions] = useState('')
  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const newRecipe = {
      title,
      recipeType,
      ingredients,
      recipeInstructions
    }
    const res = addRecipeSubmit(newRecipe)
    toast.success('Recipe added successfully')
    navigate('/home')
  }

  const addRecipeSubmit = async (newRecipe) => {
    const res = await fetch('/api/addrecipies', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newRecipe)
    })
    return res;
  }

  return (
    <>

      <section className="bg-white mb-20">
        <div className="container m-auto max-w-2xl py-2">
          <div className="bg-blue-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                Add Recipe
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Recipe Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Homemade Chicken Curry"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}

                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Non-Veg/Veg
                </label>
                <input
                  type="text"
                  id="recipeType"
                  name="recipeType"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Non-Veg"
                  required
                  value={recipeType}
                  onChange={(e) => setrecipeType(e.target.value)}

                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="ingredients"
                  className="block text-gray-700 font-bold mb-2"
                >
                  ingredients
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Ingredients for the Recipe"
                  value={ingredients}
                  onChange={(e) => setingredients(e.target.value)}
                ></textarea>
              </div>


              <div className="mb-4">
                <label
                  htmlFor="recipeInstructions"
                  className="block text-gray-700 font-bold mb-2"
                >
                  recipeInstructions
                </label>
                <textarea
                  id="recipeInstructions"
                  name="recipeInstructions"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Small recipeInstructions on the Recipe"
                  value={recipeInstructions}
                  onChange={(e) => setrecipeInstructions(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddrecipePage