import { Product } from '@/types'
import React from 'react'

interface ProductItemDetailProps{

    product : Product

}

const ProductItemDetail = ({product}:ProductItemDetailProps) => {
  return (
    <div>

{product.attributes.name}
    </div>
  )
}

export default ProductItemDetail