import { Category } from '@/types';
import { create } from 'zustand';
import axios from 'axios'

export type CategoryState = {
    categories:Category[];
    fetchCategories:()=>Promise<void>;
}


const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/categories?sort[0]=name:asc&populate=*`
export const useCategoriesStore = create<CategoryState>((set)=>({

    categories:[],
    fetchCategories:async()=>{
        try {
            const response = await axios.get(Urls);
            set({categories: response.data.data.map((category:any)=>category.attributes)})
            
        } catch (error) {
            console.log("Errror: ", error)
            
        }
    }


}))