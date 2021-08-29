import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,Image,FlatList,ActivityIndicator, TouchableOpacity,StatusBar,SafeAreaView,Platform, ScrollView} from "react-native"

import Icon from "react-native-vector-icons/Feather"
import Icons from "react-native-vector-icons/Ionicons"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import DoctorListPage from "./DoctorsList"
import OverviewPage from "./Overview"
import {useDispatch,useSelector} from "react-redux"
import DoctoMainPage from "./DoctorMain"
import {DoctorProfile} from "../../../Reducer/DoctorProfile"
import Location from "./Location"
import BussinessHour from "./BussinessHour"
import Reviews from "./Reviews"

const DoctorsProfile = ({route,navigation}) => {

    const categories=["Overview","Location","Review","BussinessHours"]
    const [categoryIndex,setcategoryIndex]=useState(0)
    const[Active,setActive]=useState("Overview")
    const dispatch =useDispatch()
    const {doctorsProfile}=useSelector((state) =>state.doctorProfile)
  
   
    
    let flag=false
    const id=route.params.id
    
    
    
    useEffect(()=>{
        if(id){
              dispatch(DoctorProfile(id))
            }
        },[id,doctorsProfile])
        
        if(doctorsProfile){
           
            flag=true
    
        }

   if (flag){
    const{id, name,fee,department,avatar,experience_count,degree,
        clinicaddr,clinicname,navigation,education,awards,specialisation,services,experience}=doctorsProfile
    return (
     
            <View style={styles.container}>
                 
                 <SafeAreaView>
                 <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

                 <View >
                 
                 <DoctoMainPage id={id} name={name}  avatar={avatar} fee={fee} department={department} 
                  experience={experience_count}  clinicaddr={clinicaddr}
                   clinicname={clinicname} education={degree} navigation={navigation} flag="Profile"/>
                 </View>
                 
                 <View style={styles.categoryContainer}>
                     {categories.map((item,index1)=>(
                         <TouchableOpacity key={index1} 
                         activeOpacity={0.8}
                         onPress={()=>setcategoryIndex(index1)}>
                         <Text  style={[styles.categoryText,categoryIndex==index1 && styles.categoryTextSelected]}>{item}</Text>
                         </TouchableOpacity>
                     ))}
                    
                 </View>

                 <ScrollView>
                 <View>
                     {/* {Active=="Overview"&&
                     
                 <OverviewPage name={name} experience_count={experience_count} 
                 education={education} experience={experience} clinicaddr={clinicaddr} 
                 department={department} clinicname={clinicname} awards={awards} services={services} 
                 specialisation={specialisation} key={id}/>
                     } */}
               
                 { Active=="Location" &&
                     <Location onPress={setActive("Location")}/>
                 }
                 { Active=="Review" &&
                 <Reviews onPress={setActive("Review")}/>
                 }
                { Active=="BussinessHours" &&
                 <BussinessHour onPress={()=>setActive("BussinessHours")}/>
                }
                   </View>
                
                 
                 </ScrollView>
                 
           
            
                 </SafeAreaView>
                 
               
              
                 
                
               
               
            </View>
        
    )

}else{
         return(
             <View style={{flex: 1,justifyContent: 'center'}}>
                 <ActivityIndicator size={45} color="black"/>
             </View>
                 
                 )
            }
}

export default DoctorsProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex:1,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: 'center'
    },
    headerTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#151515',
        
    },
    categoryContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30,
        marginBottom:30,
        marginHorizontal:10
    },
    categoryText:{
        fontSize:16,
        fontWeight:"bold",
        color:"grey"
    },
    categoryTextSelected:{
        color:"green",
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:"green"
    }
})
