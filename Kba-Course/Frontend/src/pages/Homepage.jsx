import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import View from '../components/View'


const Homepage = () => {
  return (
    <>
   
    <Hero/>
    <Cards isHome={true}/>
    <View/>
    
   </>
  )
}

export default Homepage