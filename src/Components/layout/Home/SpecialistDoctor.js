import React,{useEffect,useState} from 'react'
import { StyleSheet,ActivityIndicator, Text, View,SafeAreaView,SectionList } from 'react-native'
import HeaderPage from "../Header/Header"
import {useDispatch,useSelector} from "react-redux"
import DoctorMainPage from "../Doctors/DoctorMain"
import {fetchSpecialistDoctors} from "../../../Reducer/HomeReducer"
const SpecialistDoctor = ({route,navigation}) => {
    const [loading,setloading]=useState(false)
    const department=route.params.department
     const dispatch =useDispatch()
     const {fetchSpecialistDoctor}=useSelector((state) =>state.homeDoctors)
     const doctors=fetchSpecialistDoctor ? fetchSpecialistDoctor.doctors : []
   
     const premium_doctors=fetchSpecialistDoctor ? fetchSpecialistDoctor. premium_doctors : []
      let flag=false

      useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000)
    },[])


     useEffect(()=>{
         dispatch(fetchSpecialistDoctors(department))
         console.log("fecth",department)
        },[])

        const renderList=((item)=>{
            const{id,avatar,name,fee,department,experience,
                education,contacts,clinicaddr,clinicname,navigation}=item
            return(
                <>
               
                <DoctorMainPage id={id} name={name} education={education}
                 avatar={avatar} fee={fee} department={department} 
                department={department} experience={experience} 
                contacts={contacts} clinicaddr={clinicaddr} 
                clinicname={clinicname} navigation={navigation} flag="Profile"/>
                </>
    
                 
             )})

        
               
                   
                    return (
                        <SafeAreaView style={{flex:1}}>
                            <HeaderPage/>
                            {
                                loading ? (
                                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                    <ActivityIndicator size="large" color="black" />
                                    </View>
                                  

                                ):(
                                    <SectionList
                                    sections={[
                                        {data:premium_doctors},
                                        {data:doctors}
                                    ]}
                                    renderItem={({item})=>{
                                        return renderList(item)
                                    }}    
                                
                             
                                  keyExtractor={item=>{item.id}}
                                 />
                                   

                                )
                            }
                           
                            </SafeAreaView>
                    )      

                
   
    
}

export default SpecialistDoctor

const styles = StyleSheet.create({

})
