import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image, ScrollView } from 'react-native'
import {Card} from "react-native-paper"
import HeaderPage from "../Header/Header"

import{useSelector,useDispatch} from "react-redux"
import { ActivityIndicator } from 'react-native-paper'

const SPACING=20;
const AVATAR_SIZE=50

const SpecialistList = ({navigation}) => {
    const [loading,setloading]=useState(false)
    const {HomeDoctor}=useSelector((state) =>state.homeDoctors)
   
    const specialities =HomeDoctor ? HomeDoctor.specialities:[]
 

   
   
    useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000)
    },[])

    const renderSpecialists = ((item)=>{
       
      
        return (
            <ScrollView>
        <View style={{overflow:'hidden'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("FetchSpecialist",{department:item.department})}>

                <Card style={{width:160,height:80,
                   
                    borderRadius:5,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,
                        height:10,
                    },
                    shadowOpacity:1,
                    shadowRadius:20,
                    marginLeft:15,marginTop:20,}}>
                    <View style={{flexDirection:"row",marginTop:20,marginLeft:5}}>
                    <Image 
                    style={{width:AVATAR_SIZE,height:AVATAR_SIZE,borderRadius:AVATAR_SIZE}}
                    source={{uri: `https://aarogyahub.com${item.avatar}`}}/>
                    <Text style={{textAlign: 'center',fontWeight:"bold",width:100,marginTop:5,fontSize:14}}>{item.department}</Text>
                    </View>
                    
                </Card>
          
              </TouchableOpacity>
          
           
             
        </View>
        </ScrollView>
        )
    })

    return (
        <View style={{flex:1}}>
              <HeaderPage/>
          { loading ? (
               <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
               <ActivityIndicator size="large" color="black" />
               </View>
             
          
              
             
          ):(
           
               <View>
             
           <ScrollView>
               <FlatList
              numColumns={2}
              contentContainerStyle={{marginTop:20,paddingBottom:140}}
             showsVerticalScrollIndicator={false}
               data={specialities}
               renderItem={({item})=>{
                return renderSpecialists(item)
            }} 
             
             keyExtractor={item=>{item.id}}/>
             </ScrollView>
            
             <View/>
     
            </View>
            
        

          )}
        </View>
    )
    
}

export default SpecialistList

const styles = StyleSheet.create({
    
})





