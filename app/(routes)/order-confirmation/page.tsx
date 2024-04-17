'use client'

import { Button } from '@/components/ui/button';
import useStore from '@/hooks/useStore';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react'

const OrderConfirmationPage = () => {
    let jwt =""; 
    let user = '';
    let userId = '';

    try {
        jwt = localStorage.getItem("jwt");
        user = localStorage.getItem('user');
        if(user){
            const userObj = JSON.parse(user);
            userId= userObj.id;
        }
        
    } catch (error) {
        console.error("error", error)
        
    }

    const fetchItems = useStore((state) => state.fetchItems);
    useEffect(()=>{
        fetchItems(userId,jwt)
    },[fetchItems])


  return (
    <div className='flex justify-center my-20'>
        <div className='border shadow-md flex flex-col justify-center p-20 rounded-md items-center'>
            <CheckCircle2 className='h-24 w-24 text-green-600'/>
            <h2 className='text-green-600 text-3xl font-medium'>Order Successfull</h2>
            <h2>Thank you so much for order</h2>
            <Link href={'/my-order'}>
                <Button className='mt-8'>
                    Track your order
                </Button>
            </Link>

        </div>



    </div>
  )
}

export default OrderConfirmationPage