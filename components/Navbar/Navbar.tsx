'use client'

import { CircleUserRound, LayoutGrid, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import CategoryButton from './CategoryButton'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Cart from './Cart'

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let jwt =""; 
    let user = '';
    let userId = '';

    try {
        jwt = localStorage.getItem("jwt");
        user = localStorage.getItem('user');
        if (user) {
            const userObj = JSON.parse(user);
            userId = userObj.id;
        }
    } catch (e) {
        console.error('Error:', e);
    }



    useEffect(()=>{
        const jwt = localStorage.getItem("jwt");
        setIsLoggedIn(!!jwt)
    })

    const onSignout = ()=>{
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');

        setIsLoggedIn(false)

  }
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

          <CategoryButton/>

            <div className='md:flex hidden gap-2 items-center border rounded-full p-2 px-5'>
                <Search className='h-5 w-5'/>
                <input
                className='outline-none'
                placeholder='Search'
                />


            </div>

        </div>

        <div className='flex gap-5 items-center'>
            {isLoggedIn ?(
               <Cart jwt={jwt} userId={userId}/>
            ):(
                <Link href="/sign-in">
                <h2 className='flex gap-2 items-center text-lg'>
                <ShoppingCart className='h-7 w-7'/>
                <span className='bg-green-600 text-white px-2 rounded-full'>0</span>
            </h2>
            </Link>

            )}



           
           
    {isLoggedIn ?(
         <DropdownMenu>
         <DropdownMenuTrigger asChild>
             <CircleUserRound
             className='bg-green-200 rounded-full h-12 w-12 text-green-900'
             
             />

         </DropdownMenuTrigger>
         <DropdownMenuContent>
             <DropdownMenuLabel>My Account</DropdownMenuLabel>
             <DropdownMenuSeparator/>

             <DropdownMenuItem>Profile</DropdownMenuItem>

             <Link href={'/my-order'}>
             <DropdownMenuItem>My Order</DropdownMenuItem>
             </Link>
             <DropdownMenuItem onClick={onSignout}>Logout</DropdownMenuItem>
             


         </DropdownMenuContent>

     </DropdownMenu>


    ):(
        <Link href="/sign-in">
        <Button className='bg-green-600'>Login</Button>
   </Link>


    )

}
           



          

        </div>



    </div>
  )
}

export default Navbar