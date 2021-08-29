import React ,{useEffect}from 'react';
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

import PhoneConfirmation from './Authentication/PhoneConfirmation'
import AuthPage from './Authentication/Auth'
import OTPVerify from "./Authentication/VerifyOtp"

const RootStack=createStackNavigator();
const AuthNavigation=({navigation})=>{
    return(
        <>
                 
           <RootStack.Navigator headerMode="none">  
          
         
           <RootStack.Screen component={PhoneConfirmation} name="Phone Confirmation"/>
           <RootStack.Screen component={AuthPage} name="AuthPage"/>
          <RootStack.Screen component={OTPVerify} name="OTP" />
         
       
        </RootStack.Navigator>
       
        </>
    )
}
export default AuthNavigation