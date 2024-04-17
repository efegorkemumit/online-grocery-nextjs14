'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import useStore from '@/hooks/useStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CheckOutPage = () => {

    const [subtotal,setSubTotal]=useState(0);
    const items = useStore((state) => state.items);
    const fetchItems = useStore((state) => state.fetchItems);

    const router = useRouter();

    useEffect(()=>{
        let total = 0;
        items.forEach(element => {
            total=total+element.amount
        });
        setSubTotal(total.toFixed(2))
    },[items])

    const calculateTotalamount =()=>{
        const total= (parseFloat(subtotal)*0.18) + parseFloat(subtotal) +10;
        return total.toFixed(2);
    }

    const taxAmount =()=>{
        const tax= subtotal*0.18;
        return tax.toFixed(2)
    }

  return (
    <div>

        <h2 className='p-4 bg-green-700 text-2xl font-bold text-center text-white'>
            Checkout
        </h2>
        <div className='p-5 px-5 py-8 grid grid-cols-1 md:grid-cols-4'>
            <div className='md:col-span-3'>
                <h2 className='font-bold text-3xl'>Billing Details</h2>
                <div className='grid grid-cols-2 gap-10 mt-6'>
                    <Input placeholder='Name'/>
                    <Input placeholder='Email'/>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-6'>
                    <Input placeholder='Phone'/>
                    <Input placeholder='Zip'/>
                </div>
                <div className=' mt-6'>
                    <Textarea placeholder='Address'/>
                </div>

            </div>









            <div className='col-span-1 mx-4 bg-slate-100 rounded-2xl'>
                <h2 className='p-3 font-bold text-center'>Total Cart ({items.length}) </h2>

                <div className='p-4 flex flex-col'>
                    <h2 className='font-bold flex justify-between mb-2'>Subtotal <span> ${subtotal}</span></h2>
                    <h2 className='font-bold flex justify-between mb-2'>Delivery <span> $10</span></h2>
                    <h2 className='font-bold flex justify-between mb-2'>Tax %18 <span> ${taxAmount()}</span></h2>

                    <h2 className='font-bold flex justify-between mb-2'>Total : <span>${calculateTotalamount()} </span></h2>

                    <Button className='mt-4'>Order Now</Button>
                </div>


            </div>



        </div>
    </div>
  )
}

export default CheckOutPage