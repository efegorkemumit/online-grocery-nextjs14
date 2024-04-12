import { Product } from '@/types'
import React from 'react'
import ProductItem from './ProductItem';

interface ProductListProps{
    productList: Product[];
}

const ProductList = ({productList}:ProductListProps) => {
  return (
    <div className='mt-10'>
        <h2 className='text-green-700 font-bold text-2xl'>Shop By Product</h2>

        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-5 mt-4'>
            {productList.map((product,index)=>(
              <ProductItem
              key={index}
              product={product}
              />
            ))}



        </div>



    </div>
  )
}

export default ProductList