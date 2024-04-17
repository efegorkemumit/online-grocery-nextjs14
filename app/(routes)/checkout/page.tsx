'use client'
import { deleteCart } from '@/actions/cart/DeleteCart';
import { createOrder } from '@/actions/order/createOrder';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast';
import useStore from '@/hooks/useStore';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CheckOutPage = () => {

    const [subtotal,setSubTotal]=useState(0);
    const items = useStore((state) => state.items);
    const fetchItems = useStore((state) => state.fetchItems);

    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [zip,setZip]=useState();
    const [address,setAddress]=useState();
    const [paymentText,setPaymentText]=useState("Cash");

    const [loading,setLoading]=useState(false);


    const router = useRouter();
    const { toast } = useToast()

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

    const onApprove= async()=>{
        setLoading(true);

        const payload={
            data:{
                paymentText:paymentText,
                totalOrderAmount:calculateTotalamount(),
                username:username,
                email:email,
                phone:phone,
                zip:zip,
                address:address,
                OrderItemList:items,
                userId:userId

            }
        }

        console.log(payload)
        await createOrder(payload, jwt)
        toast({
            variant: "success",
            description: "Order Places Successfully.",
          })

          items.forEach((item,index)=>{
            deleteCart(item.id, jwt).then(resp=>{
            })
          })

          setLoading(false);

          router.push("/order-confirmation");








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
                    <Input placeholder='Name' onChange={(e)=>setUsername(e.target.value)}/>
                    <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-6'>
                    <Input placeholder='Phone'  onChange={(e)=>setPhone(e.target.value)}/>
                    <Input placeholder='Zip'  onChange={(e)=>setZip(e.target.value)}/>
                </div>
                <div className=' mt-6'>
                    <Textarea placeholder='Address'  onChange={(e)=>setAddress(e.target.value)}/>
                </div>

            </div>









            <div className='col-span-1 mx-4 bg-slate-100 rounded-2xl'>
                <h2 className='p-3 font-bold text-center'>Total Cart ({items.length}) </h2>

                <div className='p-4 flex flex-col'>
                    <h2 className='font-bold flex justify-between mb-2'>Subtotal <span> ${subtotal}</span></h2>
                    <h2 className='font-bold flex justify-between mb-2'>Delivery <span> $10</span></h2>
                    <h2 className='font-bold flex justify-between mb-2'>Tax %18 <span> ${taxAmount()}</span></h2>

                    <h2 className='font-bold flex justify-between mb-2'>Total : <span>${calculateTotalamount()} </span></h2>

                    <Button className='mt-4'
                    onClick={onApprove}>


                    {loading?<LoaderCircle className='animate-spin'/> : 'Order Now'}
                    </Button>
                </div>


            </div>



        </div>
    </div>
  )
}

export default CheckOutPage