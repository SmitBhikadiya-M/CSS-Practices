import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blogId, mainImageUrl, title, slug }: any) => {
    return (
        <div className={`p-3 w-full bg-black text-white relative h-full shadow-md`}>
            <img alt='blogPost' src={mainImageUrl} className='w-full h-full object-cover' />
            <div className='left-0 border-y-2 w-full p-2 md:p-4 bottom-0 bg-slate-800 '>
                {title}
            </div>
        </div>
    )
}

export default BlogCard