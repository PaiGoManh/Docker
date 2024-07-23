/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom';

const RecipeCards = () => {
  const [recipies, setRecipe] = useState([]);
  const [searchinput, setInput] = useState('')
  const navigate = useNavigate();

  useEffect(() => {

    const fetchRecipe = async () => {
      try {
        const res = await fetch('/api/recipies');
        const data = await res.json()
        console.log(data)
        setRecipe(data)
        console.log(recipies)

      } catch (error) {
        console.log('error', error)
      }
    };
    fetchRecipe()
  }, []);
  const handleInput=async(value)=>{
  setInput(value)
    console.log(value)
  }
  const handleSearch=async (e)=>{
    e.preventDefault()
    const recipename=searchinput
    console.log(recipename)
    try {
      const res = await fetch(`/api/searchResult/${recipename}`)
      const result=await res.json()
      console.log(result)
      if(result!=[]){
        navigate('/result', { state: { result } });
      }else{
        alert("not found any result")
        navigate('/home')

      }

    } catch (error) {
      console.log('error', error) 
      navigate('/home')
    }

  }
  return (
    <>
      <main className="flex-grow p-4">
        <div className="max-w-3xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="w-full max-w-md flex">
            <input type="text" id="recname" onChange={(e)=>{handleInput(e.target.value)} }name="recname" placeholder="Search recipes..." className="flex-grow rounded-l px-4 py-2 border border-gray-300" />
            <button  type='submit' className="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
          </form>
        </div>

        <section className=" mx-auto">
          <h2 className="text-2xl font-bold mb-4">Popular Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {
            recipies.map((recipe)=>(

              <div className="bg-white rounded-lg shadow p-4"  key={recipe._id}>
            <a> <img
              src="../images/butter_chicken.jpeg"
              alt="Recipe Image"
              className="rounded w-full h-32 object-cover mb-4"
            />
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="text-gray-600"><span className='font-bold'>Type:</span>{recipe.recipeType}</p>
              <p className="text-gray-600 " ><span className='font-bold'>Ingredients:</span> {recipe.ingredients}</p>
              <p className="text-gray-600 " ><span className='font-bold'>Instructions:</span>{recipe.recipeInstructions}</p>

            </a>
          </div>
            ))
          }
          </div>
        </section>
      </main>
    </>)
}

export default RecipeCards