import axios from "axios"





export const deleteCart = async(id:any, jwt:any)=>{
    const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-carts/${id}`

  
    try {

        const response = await axios.delete(Urls, {
            headers:{
                Authorization:'Bearer '+jwt
            }

        })

        return response.data;
        
    } catch (error) {

        console.log("error" , error)
        throw error;
        
    }

}