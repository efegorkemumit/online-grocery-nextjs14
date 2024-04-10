import { Slider } from "@/types"
import axios from "axios"



const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sliders?populate=*`


export const getSlider = async():Promise<Slider[]>=>{
    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;

}