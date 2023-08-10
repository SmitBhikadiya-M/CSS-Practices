import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ blogId, mainImageUrl, title, slug }: any) => {
    return (
        <>
            <Link href={`/${slug}`}>
                <div className="rounded overflow-hidden shadow-lg relative">
                    <Image className="w-full h-72" height={0} width={0} src={mainImageUrl} alt="blog image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 line-clamp-2" title={title}>{title}</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="absolute right-0 top-0">
                        <button className='rounded-full p-2'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1" x="0px" y="0px"
                                viewBox="0 0 100 125"
                                className='bg-slate-200 w-8 rounded-sm shadow-sm'
                                onClick={(e)=>e.preventDefault()}
                            >
                                <path d="M70.7,27.2l5.1,4.9V10H63.6v22.1l5.1-4.9C69.3,26.7,70.1,26.7,70.7,27.2z" />
                                <path d="M14.3,82.1c0,4.3,3.5,7.9,7.9,7.9h63.5v-6.5h-57c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h57v-6.5H22.2  C17.8,74.2,14.3,77.8,14.3,82.1z" />
                                <path d="M78.6,10v25.4c0,0.1,0,0.1,0,0.1c0,0.1,0,0.3-0.1,0.4c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0  c0,0-0.1,0-0.1,0c-0.3,0.2-0.6,0.4-0.9,0.4c-0.2,0-0.4-0.1-0.5-0.1c0,0,0,0,0,0c-0.1-0.1-0.3-0.1-0.4-0.2l-6.5-6.2l-6.5,6.2  c-0.1,0.1-0.3,0.2-0.4,0.3c0,0,0,0,0,0c-0.5,0.2-1,0.1-1.4-0.2c0,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.1,0-0.1-0.1-0.1-0.2  c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.3V10H22.2c-4.3,0-7.9,3.5-7.9,7.9v57.1c2-2.1,4.8-3.5,7.9-3.5  h63.5V10H78.6z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Link>
        </>

    )
}

export default BlogCard