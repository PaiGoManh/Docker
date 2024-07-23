
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const { result } = location.state || {};

  return (
    <>
      <main className="flex-grow p-4">


        <section className=" mx-auto">
          <h2 className="text-2xl font-bold mb-4">Search Result</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {result==null?'not found':
            result.map((recipe)=>(

              <div className="bg-white rounded-lg shadow p-4" key={recipe._id}>
            <a> <img
              src="../images/butter_chicken.jpeg"
              alt="Recipe Image"
              className="rounded w-full h-32 object-cover mb-4"
            />
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="text-gray-600"><span className='font-bold'>Type:</span>{recipe.recipeType}</p>
              <p className="text-gray-600"><span className='font-bold'>Ingredients:</span> {recipe.ingredients}</p>
              <p className="text-gray-600"><span className='font-bold'>Instructions:</span>{recipe.recipeInstructions}</p>

            </a>
          </div>
            ))
          }
          </div>
        </section>
      </main>
    </>)
}

export default SearchResult