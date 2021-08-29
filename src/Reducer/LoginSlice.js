import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    isUserLoggedIn: false,
    phone:""

}
export const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state, action)=>{
            const user=action.payload
            if(!user)
            return alert("Login is failed")
            state.phone=user.phone
            state.isUserLoggedIn=true
        },

    }
})
export const trylogin=(phone,password)=>{
    return async dispatch=>{
        try{
            const response = await axios.post("http://107.21.15.88:4000/api/auth/login",{
                phone: phone,
                password: password,
            })
            const user={
                token:response.headers["auth-Token"],
                phone:response.data.phone
              
            }
            console.log(token)
            AsyncStorage.setItem("token",response.headers["auth-Token"])
            dispatch(login(user))
        }catch (e){
            alert("incorrect phone&password")
        }

    }

}
export const selectorAuth=state=>state.auth
export const{login}=authSlice.actions
export default authSlice.reducer