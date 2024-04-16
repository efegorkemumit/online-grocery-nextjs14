'use client'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import useStore from '@/hooks/useStore';
import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';
import { deleteCart } from '@/actions/cart/DeleteCart';
import { Button } from '../ui/button';


interface Cartprops{
    userId:string;
    jwt:string;
}

const Cart = ({jwt,userId}:Cartprops) => {
    const items = useStore((state) => state.items);
    const fetchItems = useStore((state) => state.fetchItems);
    const deleteItem = useStore((state) => state.deleteItem);
    const [subtotal,setSubTotal]=useState(0);


    const router = useRouter();

    useEffect(()=>{
        fetchItems(userId,jwt)
    },[fetchItems])


    const onDeleteItem=(id)=>{
        deleteCart(id, jwt)
        deleteItem(id)
        

    }

    useEffect(()=>{
        let total = 0;
        items.forEach(element => {
            total=total+element.amount
        });
        setSubTotal(total.toFixed(2))
    },[items])
  return (
    <Sheet>
    <SheetTrigger>
    <h2 className='flex gap-2 items-center text-lg'>
                <ShoppingCart className='h-7 w-7'/>
                <span className='bg-green-600 text-white px-2 rounded-full'>{items.length}</span>
            </h2>

    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle className='text-3xl'>My Cart</SheetTitle>
        <SheetDescription>
         {items.map((item)=>(
            <CartItem key={item.id} item={item} onDeleteItem={onDeleteItem}/>
         ))}
        </SheetDescription>
      </SheetHeader>
      <SheetClose asChild>

        <div className='absolute w-[90%] bottom-6 flex-col'>
            <h2 className='text-lg font-bold flex justify-between'> Subtotal
            <span>  ${subtotal}</span></h2>

            <div className='h-5'></div>

        <Button disabled={items.length==0}
        onClick={()=>router.push(jwt?'/checkout': '/sign-in')}
        
        >Checkout</Button>
        </div>
             
              </SheetClose>
    </SheetContent>
  </Sheet>
  )
}

export default Cart