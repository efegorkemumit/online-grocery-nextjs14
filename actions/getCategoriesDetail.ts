import { Product } from "@/types";
import axios from "axios"





export const getCategoriesDEtail = async(categoryName:string):Promise<Product[]>=>{

    const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?filters[categories][name][$in]=${categoryName}&populate=*`

    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;

}