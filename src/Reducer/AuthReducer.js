import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {fetch2,fetch3} from '../Action/UserAction'

import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../src/api/api'
import axios from "axios"
const url = "http://107.21.15.88:4000/api"
import { userlogin } from '../Action/LoginApi'
import { Alert } from "react-native"

const initialState={
    accesstoken:null,
    loading: false,
   errorMsg:'',
   error:false,
    userData:{}
}



export const signupUser = createAsyncThunk(
    "signupUser",
    async (body) =>{
       
        const result=await fetch2('/auth/check-authentication',{phone:body.phone})
        console.log("result",result)
   
       if(result.status)
       {
           if(result.hasAccount)
           {
            body.navigation.navigate("AuthPage",{phone:body.phone})
          
           alert("Your Number is registred! Please Enter Your Password")
           console.log("phone",phone)
     
           }
           else{
             body.navigation.navigate("OTPVerification",{phone:body.phone})
            console.log("remo")
             

           }
        }else{
            return result

        }
        
      
    }
)
export const VerifyOtp = createAsyncThunk(
    "VerifyOtp",
    async (body) => {
        console.log(body)
        const result=await fetch2('/auth/verify-otp',{body:body})
        console.log(result)
        return result
        // if(result.status){
        //     body.navigation.navigation()
        // }else{
        //     return result
        // }
    }
)
export const resendOTP=createAsyncThunk(
    "resendOTP",
    async(body) => {
        const result=await fetch2('/auth/resend-otp',{phone:body.phone})
        console.log('resend',result)
    }
)
export const signinUser = createAsyncThunk(
    "signinUser",
    async (body) =>{
        console.log("rr",body)
        const result=await fetch2('/auth/login',body)
        console.log('hiiii',result)
       return result
     
      
    }
)


export const addToken = createAsyncThunk(
    "addtoken",
    async (body) =>{
        const result=await AsyncStorage.getItem('token')
        return result
      
    }
)

const authReducer=createSlice({
    name:'user',
    initialState,
    reducers:{
        signinUser:(state,action)=>{
            
            state.accesstoken=accesstoken
            AsyncStorage.setItem("token",accesstoken)
            console.log(token)
        },
       
        logout:(state, action)=>{
            state.accesstoken=null
            AsyncStorage.removeItem('token')
        }
    },  
    extraReducers:{
        [signupUser.fulfilled]:(state,{payload:payload})=>{
            state.loading=false
            if(payload){
            if(!payload.status){
                state.error=true,
                state.errorMsg =payload.msg
            }
        }


        },
      
        [signupUser.pending]:(state, action)=>{
            state.loading=true

        },
        [VerifyOtp.fulfilled]:(state,{payload:payload})=>{
            state.loading=false
            if(payload){
            if(!payload.status){
                state.error=true,
                state.errorMsg =payload.msg
            }
        }
           
         },
        [VerifyOtp.pending]:(state, action)=>{
            state.loading=true

        },
        [signinUser.fulfilled]:(state,{ payload:{accessToken,user,error}})=>{
            console.log(state)
            if(error){
                state.error=error
                alert(error)
            }else{
                state.userData=user
               state.accesstoken=accessToken
               AsyncStorage.setItem("token",accessToken)
               console.log("access",accessToken)
            }
            console.log(state)

         
           
            
        },
        [signinUser.pending]:(state, action)=>{
          
            state.loading=true

        },
     
        [addToken.fulfilled]:(state, action)=>{
            state.accesstoken=action.payload
        }

    }
})
export const{logout}=authReducer.actions

export default authReducer.reducer