import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import PlanLayout from '../src/Components/layout/PlanLayout'
import {addToken} from "./Reducer/AuthReducer"
import AuthNavigationPage from "./Components/layout/AuthNavigation"
export default function App() {
  const token=useSelector((state) =>state.user.accesstoken)

  
  console.log("tokengdhf",token)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addToken())
  },[])

  return (
    <NavigationContainer>
   
      

      {token ?<PlanLayout/>: <AuthNavigationPage/>
}
          
     

 


    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
  
  },
});
