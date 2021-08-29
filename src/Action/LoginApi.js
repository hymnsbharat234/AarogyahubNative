import axios from "axios"
const url = "http://107.21.15.88:4000/api/auth/login"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const userlogin=(body) =>{
    return new Promise(async(resolve,reject) =>{
        try{
            const res=await axios.post(url,body);
            console.log(res)
            resolve(res.data);
            if(res.data.status==="success"){
                AsyncStorage.setItem("aarogyahub",JSON.stringify({accesstoken:res.data.accesstoken}))
                

            }
        }catch(error){
            reject(error);

        }

    })
}