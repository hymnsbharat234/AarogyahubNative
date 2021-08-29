import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const url="http://107.21.15.88:4000/web"
import {fetch3} from '../Action/UserAction'
const initialState={
    loading: false,

}


export const DoctorProfile = createAsyncThunk(
    "DoctorProfile",
    async(id)=>{
        // console.log("inProfile",body)
        // console.log("new action")
        // console.log("rock",id)
        const res = await axios.post(url+'/doctor-profile',{id:id})
       
        if(res.status){
            return res.data
        }else{
            return res.data
        }
    }
)
const doctorProfileReducer=createSlice({
    name:'doctorsProfile',
    initialState,
    reducers:{},
    extraReducers:{
        [DoctorProfile.fulfilled]:(state, { payload:doctorsProfile})=>{
            if(doctorsProfile.status){
                state.doctorsProfile=doctorsProfile
            }else{
                state.doctorsProfile=doctorsProfile
            }

        },
        [DoctorProfile.pending]:(state, action)=>{
            state.loading=true

        },
      

    }
})
export default doctorProfileReducer.reducer