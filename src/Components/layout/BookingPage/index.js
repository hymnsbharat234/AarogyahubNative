import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import DoctorMainPage from "../Doctors/DoctorMain"
import {DoctorProfile} from "../../../Reducer/DoctorProfile"
import {useDispatch,useSelector} from "react-redux"
import LoaderPage from "../Loader/Loader"

import SlotPage from "./Slot"
const index = ({route,navigation,fee,date,day}) => {
    const dispatch=useDispatch()
    const {doctorsProfile}=useSelector((state) =>state.doctorProfile)
   
    const [show,setShow]=useState(false)


    const id=route.params.id

    let flag=false
   
  
    useEffect(()=>{
        if(id){
              dispatch(DoctorProfile(id))
            }
        },[doctorsProfile])
        // console.log('docprofiolr',doctorsProfile)
        if(doctorsProfile){
           
            flag=true
    
        }

    if(flag){
    const{id, name,fee,department,avatar,experience_count,degree,clinicaddr,
        clinicname,education,awards,specialisation,services,experience}=doctorsProfile
     
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
          

           <View>
           <DoctorMainPage id={id} name={name}  avatar={avatar}
             fee={fee} department={department}  experience={experience_count} 
              clinicaddr={clinicaddr} clinicname={clinicname} education={degree}
               navigation={navigation} flag="Profile"/>
         

           </View>

         
           
             <View style={{marginTop:10,}}>
            <SlotPage navigation={navigation}  fee={fee} data={date} day={day} />


           
               </View> 
         
         
        </View>
    )
    }else{
        return(
            <>
            <LoaderPage/>
            </>
        )
    }
}

export default index

const styles = StyleSheet.create({})
