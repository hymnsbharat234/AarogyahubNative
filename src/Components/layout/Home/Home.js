import React,{useEffect} from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView, ActivityIndicator } from 'react-native'
import HeaderPage from "../Header/Header"
import SpecialistsPage from './Specialists'
import DoctorSliderPage from "./DoctorSlider"
import PopularLabPage from "./PopularLab"
import TestSliderPage from "./TestSlider"
import {useDispatch,useSelector} from "react-redux"
import {HomeDoctors} from "../../../Reducer/HomeReducer"
const Home = ({navigation,id}) => {
    const dispatch =useDispatch()
    const {HomeDoctor}=useSelector((state) =>state.homeDoctors)
   
    const specialities =HomeDoctor ? HomeDoctor.specialities:[]
   
   
    let flag=false
    useEffect((data)=>{
        dispatch(HomeDoctors(data))
       
        },[])
        return (
            <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
                <HeaderPage/>
                <ScrollView>
                <View>
               
                <SpecialistsPage navigation={navigation}/>
                <DoctorSliderPage navigation={navigation} id={id} />
                <TestSliderPage/>
                <PopularLabPage/>
                </View>
                </ScrollView>
             
               
            </SafeAreaView>
        )
   
}

export default Home

const styles = StyleSheet.create({

})
