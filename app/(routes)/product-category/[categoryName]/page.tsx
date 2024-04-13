import { getCategoriesDEtail } from '@/actions/getCategoriesDetail';
import ProductList from '@/components/Product/ProductList';
import React from 'react'
import TopCategory from '../_components/TopCategory';
import { getCategories } from '@/actions/getCategories';

interface CategoryNamePageprops{
    params:{
        categoryName:string;
    }
}

const CategoryNamePage = async({params}:CategoryNamePageprops) => {

    const categoryDetail  =  await getCategoriesDEtail(params.categoryName)
    const categoryList = await getCategories();
  return (
    <div>
        <h2 className='p-4 bg-green-600 text-white font-bold text-center text-4xl mb-5'> 
         {params.categoryName}
         </h2>


  

         <div className='p-8 '>

         <TopCategory
    categoryList={categoryList}
    />

                <ProductList productList={categoryDetail}/>

         </div>
        
      
        
        
    </div>
  )
}

export default CategoryNamePage