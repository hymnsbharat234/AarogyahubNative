import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const url="http://107.21.15.88:4000/web"
const initialState={}
export const HomeDoctors = createAsyncThunk(
    "HomeDoctors",
    async (body) =>{
        console.log(body)
        const result=await axios.post(url+'/Home',body)
   
        if(result.data.status){
          return  result.data
        }else{
            return result.data

        }
       
      
    }
)
export const fetchSpecialistDoctors= createAsyncThunk(
    "fetchSpecialistDoctors",
    async(department)=>{
        console.log("dep",department)
        const response = await axios.post(url+'/specialist',{department: department})
       
        if(response.data.status){
            return response.data
        }else{
            return response.data
        }

        
    }
)
export const fetchDoctorsProfile= createAsyncThunk(
    "fetchDoctorsProfile",
    async(id)=>{
        console.log("id",id)
        const response = await axios.post(url+'/doctor-profile',{id: id})
       console.log("response",response)
        if(response.data.status){
            return response.data
        }else{
            return response.data
        }

        
    }
)
const HomeReducer=createSlice({
    name:'Home',
    initialState,
    reducers:{},
    extraReducers:{
        [HomeDoctors.fulfilled]:(state, { payload:HomeDoctor})=>{
            if(HomeDoctor.status){
                state.HomeDoctor=HomeDoctor
            }else{
                state.HomeDoctor=HomeDoctor
            }

        },
        [fetchDoctorsProfile.fulfilled]:(state, { payload:fetchDoctorsProfiles})=>{
            if(fetchDoctorsProfiles.status){
                state.fetchDoctorsProfiles=fetchDoctorsProfiles
            }else{
                state.fetchDoctorsProfiles=fetchDoctorsProfiles
            }

        },
        [fetchSpecialistDoctors.fulfilled]:(state, { payload:fetchSpecialistDoctor})=>{
            if(fetchSpecialistDoctor.status){
                state.fetchSpecialistDoctor=fetchSpecialistDoctor
            }else{
                state.fetchSpecialistDoctor=fetchSpecialistDoctor
            }

        },

      

    }
})
export default HomeReducer.reducer