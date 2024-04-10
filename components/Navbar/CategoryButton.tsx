'use client'

import { useCategoriesStore } from '@/hooks/useCategoriesStore'
import { LayoutGrid } from 'lucide-react'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import Image from 'next/image'


const CategoryButton = () => {

    const {categories, fetchCategories } = useCategoriesStore((state)=>({
        categories:state.categories,
        fetchCategories:state.fetchCategories
    }))

    const [fetched, setFetched] = useState(false);

    if(!fetched){
        fetchCategories();
        setFetched(true)
    }
  return (
    <div>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200
            cursor-pointer'>

                <LayoutGrid className='h-5 w-5'/> Category
            </h2>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                {categories.map((category, index)=>(
                    <Link key={index} 
                    href={'/product-category/'+category.name}>
                        <DropdownMenuItem className='flex gap-3 items-center cursor-pointer'>
                            <Image
                            alt='icon'
                            width={30}
                            height={30}
                            unoptimized={true}
                            src={
                                process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                                category?.icon?.data?.attributes?.url


                            }   
                            />
                            <h2>{category.name}</h2>


                        </DropdownMenuItem>
                    
                    </Link>


                ))}

            </DropdownMenuContent>
        </DropdownMenu>



    </div>
  )
}

export default CategoryButton