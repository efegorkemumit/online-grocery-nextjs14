'use client'

import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useRouter } from 'next/navigation';
import { getOrder } from '@/actions/order/getOrder';
import MyorderItem from './components/MyorderItem';
import moment from 'moment';


const MyOrder = () => {

  const [orderList,setOrderList]=useState([]);

  const router = useRouter();


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
        if(!jwt)
        {
            router.replace('/');
        };
        getMyOrder();
    },[]);

    const getMyOrder=async()=>{
      const orderList_= await getOrder(userId,jwt)
      console.log(orderList_);
     setOrderList(orderList_)
  }


  return (
    <div>
      <h2 className='p-3 bg-green-700 font-bold text-4xl text-center text-white'>My Order</h2>

      <div className='py-8 mx-7'>
        <h2 className=' text-3xl font-bold'>Order History</h2>

        <div className='mt-10'>
          {orderList.map((item,index)=>(
            <Collapsible key={index}>
              <CollapsibleTrigger>
              <div className='border p-2 bg-slate-100 flex gap-24'>
                  <h2><span className='font-bold mr-2'>Order Date: </span>{moment(item?.createdAt).format('DD/MMM/yyy')}</h2>
                  <h2><span className='font-bold mr-2'>Total Amount:</span> {item?.totalOrderAmount}</h2>
                  <h2><span className='font-bold mr-2'>Status:</span> Pending</h2>
              </div>
              
              
              </CollapsibleTrigger>
              <CollapsibleContent>
              {item.orderItemList && item.orderItemList.map((order, index_)=>(

                <MyorderItem key={index_} orderItem={order}/>
              ))}
              
              </CollapsibleContent>
            
            </Collapsible>




          ))}





        </div>

        
      </div>



    </div> 
  )
}

export default MyOrder