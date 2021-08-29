import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import todoReducer from '../src/Reducer/TodoReducer'
import authReducer from '../src/Reducer/AuthReducer'
import LoginReducer from '../src/Reducer/LoginSlice'
import DocotorSlice from "../src/Reducer/DoctorsReducer"
import DoctorProfile from '../src/Reducer/DoctorProfile'
import HomeDoctors from "../src/Reducer/HomeReducer"
import UserDetail from "../src/Reducer/UserDetails"
const store = configureStore({
    reducer:{
        user:authReducer,
        
        login: LoginReducer,
        docotors:DocotorSlice,
        doctorProfile:DoctorProfile,
        homeDoctors:HomeDoctors,
        UserDetails:UserDetail,
    }

    
 
})


const index=()=>{
    return(
        
            <React.StrictMode>
                <Provider store={store}>
                <App />
                </Provider>
            </React.StrictMode>
      
        )
    
}
export default index
