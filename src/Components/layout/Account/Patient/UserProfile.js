import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image } from 'react-native'
import {Card} from "react-native-paper"
import {useSelector,useDispatch} from "react-redux"
import {UserDetails} from "../../../../Reducer/UserDetails"
import LoaderPage from "../../Loader/Loader"
const UserProfile = ({navigation}) => {


    const [loading,setloading]=useState(false)
    const dispatch =useDispatch()

    const {UserProfile}=useSelector((state) =>state.UserDetails)
    const userDetail=UserProfile ? UserProfile.user : []

    console.log("userDetail",userDetail)
    let flag=false


   


    useEffect(()=>{
        dispatch(UserDetails())
    },[])
    useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000)
    },[])
    if(userDetail){
           
        flag=true

    }

   

 if(flag){
     const{name,phone}=userDetail
    return (
        <>

       
           
        <View>
             <View style={{marginTop:20}}>
                <Card style={{height:120,borderWidth:1,marginHorizontal:10,borderRadius:5}}>
                <View style={{marginTop:10,marginHorizontal:10}}>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>Name: {name} </Text>
                    <Text style={{fontSize:16,fontWeight:"bold",marginTop:5}}>Gender: Male</Text>
                    <Text style={{fontSize:16,fontWeight:"bold",marginTop:5}}>D.O.B: 20 Jan 1998 </Text>
                    <Text style={{fontSize:16,fontWeight:"bold",marginTop:5}}>Blood Group: B+</Text>
                </View>
                </Card>
                <View style={{marginTop:20}}>
                <Card style={{height:90,borderWidth:1,marginHorizontal:10,borderRadius:5}}>
                <View style={{marginTop:10,marginHorizontal:10}}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"teal"}}>Contact</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginTop:5}}>Email: Chandrakantyadav814101@gmail.com</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginTop:5}}>Phone: {phone}</Text>
                    
                </View>
                </Card>
                </View>
                <View style={{marginTop:20,}}>
                <Card style={{height:140,borderWidth:1,marginHorizontal:10,borderRadius:5}}>
                <View style={{marginTop:10,marginHorizontal:10}}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"teal"}}>Address</Text>
                   
                    <Text style={{fontSize:14,fontWeight:"bold",marginTop:5}}>Rakhabani RaiskPur Dumka</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginTop:5}}>City: Dumka</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginTop:5}}>PinCode: 814101</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginTop:5}}>State: Jharkhand</Text>
                    
                </View>
                </Card>
                </View>
                <View style={{marginTop:20,alignItems:"center"}}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("UpdateProfilePage")}
                style={{width:120,height:30,backgroundColor:"teal",borderRadius:5}}>
                    <Text style={{textAlign:"center",fontWeight:"bold",color:"#fff",paddingTop:5}}>Update Profile</Text>
                </TouchableOpacity>
                </View>
                
            </View>
      
           </View>
            
            
     
        </>
        

        
    )

 }else{
     return(
         <>
         <LoaderPage/>
         </>
     )
 }

    
}

export default UserProfile

const styles = StyleSheet.create({})
