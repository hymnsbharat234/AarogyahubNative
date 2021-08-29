import React,{useEffect} from 'react'
import { StyleSheet,ActivityIndicator,FlatList, Text, View,SafeAreaView,SectionList } from 'react-native'
import HeaderPage from "../Header/Header"

import DoctorMainPage from "../Doctors/DoctorMain"
import {useDispatch,useSelector} from "react-redux"

import {fetchDoctorsProfile} from "../../../Reducer/HomeReducer"
const SpecialistDoctor = ({route,navigation}) => {

    const id=route.params.id
  
     const dispatch =useDispatch()
     const {fetchDoctorsProfiles}=useSelector((state) =>state.homeDoctors)
     
     
 
    
      let flag=false

     useEffect(()=>{
         dispatch(fetchDoctorsProfile(id))
        
        },[id])

       
        
             if(fetchDoctorsProfiles){


                
                  flag=true
              }
                   if(flag){
                    const{id, name,fee,department,avatar,experience_count,degree,clinicaddr,
                        clinicname,navigation,education,awards,
                        specialisation,services,experience, }=fetchDoctorsProfiles
                

                    return (
                       
                        
                        <SafeAreaView style={{flex:1}}>
                            <HeaderPage
                            
                            />
                         
                         <DoctorMainPage id={id} name={name}  avatar={avatar} fee={fee}
                          department={department}  experience={experience_count} 
                           clinicaddr={clinicaddr} clinicname={clinicname} 
                           education={degree} navigation={navigation} flag="Doctors"/>
                    
                     
                           
                            </SafeAreaView>
                    )

                   }else{
                       return(
                           <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
                               <ActivityIndicator size="large" color="black" />
                           </View>
                       )
                   }
                        

                
   
    
}

export default SpecialistDoctor

const styles = StyleSheet.create({

})