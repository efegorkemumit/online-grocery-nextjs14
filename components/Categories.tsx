import { Category } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface CategoriesProps{
    categoryList:Category[];
}
const Categories = ({categoryList}:CategoriesProps) => {
  return (
    <div className='mt-10'>
        <h2 className='text-green-700 font-bold text-2xl'>Shop By Category</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 mt-2'>
            {categoryList.map((category, index)=>(
                <Link
                href={'/product-category/'+category.attributes.name}
                key={index}
                className='flex flex-col
                rounded-xl gap-2
                 items-center p-3 bg-green-100 
                 cursor-pointer hover:bg-green-500 group'
                >

<Image
                            alt='icon'
                            width={30}
                            height={30}
                            unoptimized={true}
                            src={
                                process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                                category?.attributes.icon?.data?.attributes?.url


                            }   
                            />

                            <h2 className='text-green-700 group-hover:text-white'>{category.attributes.name}</h2>
                
                
                
                </Link>
            ))}




        </div>



    </div>
  )
}

export default Categories