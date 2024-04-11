import { Category, Slider } from "@/types"
import axios from "axios"



const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/categories?populate=*`


export const getCategories = async():Promise<Category[]>=>{
    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;

}