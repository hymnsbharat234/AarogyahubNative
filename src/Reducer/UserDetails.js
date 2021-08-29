import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {fetch4,fetch3} from "../Action/UserAction"
import AsyncStorage from '@react-native-async-storage/async-storage'


const initialState={
    loading: false,

}

export const UserAppointment = createAsyncThunk(
    "UserAppointment",
    async (url)=>{
      
        const result=await fetch4('/appointments')
       
        return result

    }


)
export const UserDetails=createAsyncThunk(
    "UserDetails",
    async (url)=>{
        const result=await fetch4('/get-user-details')
      
        return result
    }

)
export const OrderValidation=createAsyncThunk(
    "OrderValidation",
    async (formValues)=>{
        console.log("body",formValues)
        const token = await  AsyncStorage.getItem('token')
        const result=await fetch('http://107.21.15.88:4000/api/order-validation',{
            method: 'POST',
            body:JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
                 
                "Authorization":`Bearer ${token}`
            },
        
        })
        console.log(result,"validation")
        return result
    }

)
const UserDetailsReducer=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:{
        [UserDetails.fulfilled]:(state, { payload:UserProfile})=>{
            if(UserProfile.status){
                state.UserProfile=UserProfile
            }else{
                state.UserProfile=UserProfile
            }

        },
        [UserDetails.pending]:(state, action)=>{
            state.loading=true

        },
        [OrderValidation.fulfilled]:(state, { payload:UserOrder})=>{
            if(UserOrder.status){
                state.UserOrder=UserOrder
            }else{
                state.UserOrder=UserOrder
            }

        },
        [OrderValidation.pending]:(state, action)=>{
            state.loading=true

        },
    }


})
export default UserDetailsReducer.reducer

