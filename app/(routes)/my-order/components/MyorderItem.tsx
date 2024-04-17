import Image from 'next/image'
import React from 'react'

interface MyorderItemProps{
    orderItem:any
}

const MyorderItem = ({orderItem}:MyorderItemProps) => {
  return (
    <div className='w-[60%]'>

        <div className='grid grid-cols-5 mt-3 items-center'>
        <Image 

unoptimized={true}
src={
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
    orderItem.product.data.attributes.images.data.attributes.url

}   
        
        width={80}
        height={80}
        alt='image'
        className='bg-gray-100 p-5 rounded-md border'
        />

        <div className='col-span-2'>
             <h2>{orderItem.product.data.attributes.name}</h2>


        </div>
        <h2>Qutantity = {orderItem.quantity}</h2>
        <h2>Item Price:${orderItem.product.data.attributes.sellingPrice}</h2>


<hr className='mt-3'></hr>


        </div>



    </div>
  )
}

export default MyorderItem