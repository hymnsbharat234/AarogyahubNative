import React,{useEffect,useState} from 'react';
import {Text,View,StyleSheet,Image,FlatList,SectionList, TouchableOpacity,StatusBar,SafeAreaView,Platform,ScrollView,TextInput,ActivityIndicator} from "react-native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/Ionicons"

import {useSelector,useDispatch} from "react-redux"
import {Doctors} from "../../../Reducer/DoctorsReducer"
import { useNavigation } from '@react-navigation/native';
import DoctorMainPage from "./DoctorMain"
import HeaderPage from "../Header/Header"
import COLORS from "../constants/colors";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const DoctorsPage=()=>{
  const [loading,setloading]=useState(false)
    const dispatch=useDispatch()
    const {doctors}=useSelector((state) =>state.docotors)
    const navigation = useNavigation();
   
    const doctor=doctors ? doctors.doctors : []
    const premium_doctor=doctors ? doctors. premium_doctors : []
    
  
    useEffect((data)=>{
        dispatch(Doctors(data))

    },[])
    useEffect(()=>{
      setloading(true);
      setTimeout(()=>{
          setloading(false);
      },2000)
  },[])




 
    const renderList=((item)=>{
        const{id,avatar,name,fee,department,experience,education,contacts,clinicaddr,clinicname}=item
        return(
            <>
           
            <DoctorMainPage id={id} name={name} education={education} avatar={avatar} fee={fee}
             department={department} department={department} experience={experience} contacts={contacts}
             clinicaddr={clinicaddr} clinicname={clinicname} navigation={navigation} flag="Doctor"/>
            </>

             
         )})
        return(
             <>
            
        <SafeAreaView style={styles.container}>
        <StatusBar translucent={false} backgroundColor={COLORS.primary}/>
        <View style={styles.header}>
          <Icons name="sort" size={28} color="#fff"/>
         
          <Icon name="notifications-outline" size={28} color={COLORS.white}/>
         </View>
        
        <View 
        style={{backgroundColor:COLORS.primary,height:100,
        paddingHorizontal:20}}>
          <View style={{flex:1}}>
          <Text style={styles.headerTitle}>
             AarogyHub
          </Text>
          <View style={styles.inputContainer}>
            <Icon name="search-outline" size={28}/>
            <TextInput
            placeholder="Search Here"
            
            style={{color:COLORS.dark,paddingLeft:10,fontWeight:"bold",fontSize:16}}
            />

          </View>
          </View>

        </View>
  
      
     
     
   
     
        { loading ? (
               <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
               <ActivityIndicator
              
               size="large" color="black"/>
               </View>
             
          
              
             
          ):(
  
     
   
            <SectionList
            sections={[
                {data:premium_doctor},
                {data:doctor}
            ]}
            renderItem={({item,index})=>{
                return renderList(item,index)
            }}    
        
     
          keyExtractor={(item,index)=>{
            return  item.id.toString()
          }
            
          }
         />
         )}
        
        </SafeAreaView>
   
             </>
        )
  
}
export default DoctorsPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:COLORS.white
      },
      header:{
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:COLORS.primary,
        
      },
      headerTitle:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:23,

      },
      inputContainer:{
        height:45,
        width:"100%",
        backgroundColor:COLORS.white,
        borderRadius:10,
        position:"absolute",
        top:50,
        flexDirection:"row",
        paddingHorizontal:20,
        alignItems:"center",
        borderWidth:1
      }
})