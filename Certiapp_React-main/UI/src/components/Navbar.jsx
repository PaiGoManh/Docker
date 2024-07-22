import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex flex-row justify-end p-4'>
        <a className="border-1 bg-cyan-700 px-8 py-2  mr-2" href="/">Home</a>
        <a className="border-1  px-8 py-2 " href="/issue">Issue Certificate</a>
        <a className="border-1 bg-cyan-700 px-8 py-2  mr-2" href="/view">View</a>
    </div>
    </>
  )
}

export default Navbar