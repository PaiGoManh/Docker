import React, { useEffect, useState } from 'react'
import Crd from './Crd'
// import {ScaleLoader} from 'react-spinners'

// import rp from './assets/images/rp.png'

// import courses from '../courses.json';

// console.log(courses);
function Cards({isHome=false}) {

  const [courses,setCourse]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const fetchCourse=async ()=>{
        try {
          const res=await fetch('/api/courses')
          const data= await res.json()
          setCourse(data)
          
        } catch (error) {
          console.log('error',error);
          
        }
        finally{
          setLoading(false)
        }
    }
    fetchCourse();
  },[])


  const courselist=isHome?courses.slice(0,3):courses;
  
  return (
    <>
    
    <h1 style={{fontSize :"30px", marginLeft:"45%", color:'purple-800', fontWeight:"bolder"}}>{isHome?'Top courses':'Browse All Courses'} </h1>

        
         {/* <Crd cardText={"Ethereum Developer"} />
         <Crd cardText={"FrontEnd Developer"}/>
         <Crd cardText={"Backend Developer"}/>
         <Crd cardText={"Full Stack Dev"}/>
         <Crd cardText ={"Hyperledger "} />
         <Crd  cardText={"Ethereum Developer"}/> */}
            

            {loading?<h1>Page loading</h1>:    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
              {courselist.map((course)=>(
        <Crd key={course.courseId} course={course}/>
        ))}

         
    </div>}

     
    </>
  )
}

export default Cards