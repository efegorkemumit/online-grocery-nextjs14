'use client'

import { Product } from '@/types'
import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'
import { Button } from '../ui/button'
import { LoaderCircle, ShoppingBasket } from 'lucide-react'
import useCart from '@/hooks/use-cart'

interface ProductItemDetailProps{

    product : Product

}

const ProductItemDetail = ({product}:ProductItemDetailProps) => {

    const [quantity,setQuantity]=useState(1);
    const [loading,setLoading]=useState(false);
    const [productTotalPrice,setProductTotalPrice]=useState(
        product.attributes.sellingPrice?
        product.attributes.sellingPrice:
        product.attributes.mrp
    )

    const incrementQuantity = () => {
        setQuantity(quantity + 1); // Adet sayısını artır
    };
    
    // Azaltma işlevi
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); // Adet sayısını azalt (minimum 1 olacak şekilde)
        }
    };

    const cart = useCart();
    const [totalPrice, setTotalPrice] = useState(0); // Toplam fiyatı state olarak sakla ve setter fonksiyonunu al



    const onAddCart: MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();

        setLoading(true);

        const productToAdd = { ...product, quantity }; // Ürünü sepete eklerken mevcut adet miktarını kullan
        cart.addItem(productToAdd, quantity, quantity*productTotalPrice); // Ürün miktarını da eklemeye geçir
    
        // Toplam fiyatı güncelle
        const totalPrice = parseFloat(productToAdd.sellingPrice) * quantity;
        setTotalPrice((prevTotalPrice) => prevTotalPrice + totalPrice);



        setLoading(false);



    }



  return (
    <div className='w-full'>

        <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black
        gap-8'>

<Image
        width={500}
        alt='alt'
        height={200}
        unoptimized={true}
        src={
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
            product.attributes.images.data.attributes.url


        }   
        />

        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-semibold'>{product.attributes.name}</h2>
            <p className='text-sm text-gray-600'>{product.attributes.description}</p>

            <div className='flex gap-3'>
            {product.attributes.sellingPrice &&
            <h2 className='font-bold text-3xl'>${product.attributes.sellingPrice}</h2> }
            <h2 className={product.attributes.sellingPrice && 'font-bold text-3xl line-through text-gray-400'}> ${product.attributes.mrp}</h2>


          


         </div>

         <h2 className='text-2xl font-bold'> Quantity ({product.attributes.itemQuantitiyType})</h2>

        <div className='flex flex-col items-baseline gap-4'>

            <div className='gap-3 flex items-center'>

                <div className='p-2 border bg-slate-200 flex gap-8 items-center px-5'>

                <button disabled={quantity==1} onClick={decrementQuantity} className='text-2xl'>-</button>
                <h2>{quantity}</h2>
                <button onClick={incrementQuantity}  className='text-2xl'>+</button>


                </div>
<h2>$ {(quantity*productTotalPrice).toFixed(2)}</h2>
            </div>

            <Button disabled={loading} onClick={onAddCart}>
                <ShoppingBasket/>
                {loading?<LoaderCircle className='animate-spin'/> : 'Add to Cart'}

                
            </Button>
            
          


        </div>
        <h2> 
            <span className='font-bold ml-2'>Category  : </span>
            {product.attributes.categories.data[0].attributes.name}    
        </h2>



        </div>


        </div>

    </div>
  )
}

export default ProductItemDetail