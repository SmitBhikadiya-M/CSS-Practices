import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full p-5 flex flex-row justify-between items-center shadow-md '>
        <Link href={'/'}><h1 className='focus:outline-none xl:text-4xl md:text-3xl text-2xl text-center text-gray-800 font-extrabold mb-2'>Blogs</h1></Link>
        <div>
          <button>SignIn</button>
          <button>Logout</button>
        </div>
    </header>
  )
}

export default Header