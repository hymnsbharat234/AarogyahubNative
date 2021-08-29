import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const url="http://107.21.15.88:4000/web"
import {fetch3} from '../Action/UserAction'

const initialState={}

export const Doctors = createAsyncThunk(
    "Doctors",
    async (body) =>{
        
        const result=await axios.post(url+'/doctors',body)
       
        if(result.data.status){
          return  result.data
        }else{
            return result.data

        }
       
      
    }
)
// export const DoctorProfile = createAsyncThunk(
//     "DoctorProfile",
//     async(id)=>{
//         const res = await axios.post(url+'/doctor-profile', {id:id})
//         console.log(res.data)
//     }
// )
const doctorReducer=createSlice({
    name:'doctors',
    initialState,
    reducers:{},
    extraReducers:{
        [Doctors.fulfilled]:(state, { payload:payload})=>{
            if(payload.status){
                state.doctors=payload
            }else{
                state.payload=payload
            }

        },
      

    }
})
export default doctorReducer.reducer