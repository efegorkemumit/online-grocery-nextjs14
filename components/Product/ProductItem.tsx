import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ProductItemDetail from './ProductItemDetail'


interface ProductItemProps{
    product: Product
}

const ProductItem = ({product}:ProductItemProps) => {

  return (
    <div className='p-2 md:p-4 lg:p-6  flex flex-col items-center justify-center
    gap-4 border rounded-xl hover:shadow-lg transition-all cursor-pointer'>

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

        <h2 className='font-bold text-lg'>{product.attributes.name}</h2>
        <div className='flex gap-3'>
            {product.attributes.sellingPrice &&
            <h2>${product.attributes.sellingPrice}</h2> }
            <h2 className={product.attributes.sellingPrice && 'line-through text-gray-400'}> ${product.attributes.mrp}</h2>


        </div>

        <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline"
                     className='bg-green-600 text-white'>
                        Add To Cart
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[725px]">
                <DialogHeader>
                    <DialogDescription>
                        <ProductItemDetail
                        product={product}/>

                    </DialogDescription>



                </DialogHeader>



                </DialogContent>



        </Dialog>






    </div>
  )
}

export default ProductItem