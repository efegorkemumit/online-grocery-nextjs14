import { LayoutGrid, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='p-5 shadow-sm flex justify-between'>
        <div className='flex items-center gap-8'>
            <Link href={"/"}>
                <Image
                alt='logo'
                src="/logo.png"
                width={130}
                height={90}
                className='cursor-pointer'
                />
            
            
            </Link>

            <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200
            cursor-pointer'>

                <LayoutGrid className='h-5 w-5'/> Category
            </h2>

            <div className='md:flex hidden gap-2 items-center border rounded-full p-2 px-5'>
                <Search className='h-5 w-5'/>
                <input
                className='outline-none'
                placeholder='Search'
                />


            </div>

        </div>

        <div className='flex gap-5 items-center'>
            <h2 className='flex gap-2 items-center text-lg'>
                <ShoppingCart className='h-7 w-7'/>
                <span className='bg-green-600 text-white px-2 rounded-full'>2</span>
            </h2>

            <Button className='bg-green-600'>Login</Button>


        </div>



    </div>
  )
}

export default Navbar