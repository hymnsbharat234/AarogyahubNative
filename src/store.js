import {configureStore} from '@reduxjs/toolkit'

import authReducer from '../src/Reducer/AuthReducer'
import todoReducer from '../src/Reducer/TodoReducer'
import LoginReducer from "../src/Reducer/LoginSlice"

export const store=configureStore({
    reducer:{ 
    
      
      login: LoginReducer,
    },
});

