import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-32 flex flex-col justify-center items-center shadow-md '>
        <h1 className='focus:outline-none xl:text-4xl md:text-3xl text-2xl text-center text-gray-800 font-extrabold mb-2 pt-4'>Blogs</h1>
        <h2 className='xl:text-xl md:text-base text-sm text-gray-700 text-center px-2 xs:px-0'>Unveiling Insights, Innovations, and Ideas Across Diverse Technical Disciplines</h2>
    </header>
  )
}

export default Header