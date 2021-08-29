import { createEntityAdapter } from '@reduxjs/toolkit'
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image } from 'react-native'
import {Card} from "react-native-paper"
import{useSelector,useDispatch} from "react-redux"


const PopularLab = () => {
    const {HomeDoctor}=useSelector((state) =>state.homeDoctors)
   
    const tests =HomeDoctor ? HomeDoctor.tests:[]
  
    const renderSpecialists = ((item)=>{
       
        return (
        <View style={{overflow:'hidden'}}>
            <Card style={{width:90,height:90,
                marginBottom:15,marginLeft:20,marginHorizontal:10,borderRadius:10, boxShadow:"none",position: 'relative'}}>
               
               <Image 
               style={{height:90,width:90,borderRadius:10,alignItems:"center",}}
               
               source={{uri: `https://aarogyahub.com${item.avatar}`}}/>
              <View style={{position:"absolute",top:68,
                    backgroundColor:"#fff",borderRadius:9,left:5,width:80}}>
                  <Text style={{color:"#00695c",fontWeight:"bold",fontSize:12,textAlign:"center"}}>{item.commonname}</Text>

              </View>
                
                
            </Card>
            {/* <View style={{marginTop:12,justifyContent:"space-around"}}>
            <Text style={{fontSize:13,paddingRight:5,
                textAlign:'center',
                paddingLeft:12,fontWeight:"500"}}>{item.department}</Text>
               <Text style={{fontSize:12,textAlign: 'center',
               width:131,fontWeight:"700",fontFamily:"Poppins sans-serif",paddingLeft:10,overflow:'hidden'}}>{item.description}</Text>
               
              </View> */}
          
           
             
        </View>
        )
    })
    
    return (
        <View>
           <View style={{flexDirection:"row",
           justifyContent:'space-between',marginTop:15}}>
               <View>
               <Text style={{fontWeight:"bold",
               marginLeft:10,fontSize:18}}>Book Top Tests</Text>
               <Text style={{ marginLeft:10,fontWeight:"500",lineHeight:15,
               fontFamily:"Poppins,sans-serif",color:"black",marginTop:5
                }}>Now start booking tests from labs{"\n"}available in your city</Text>
               </View>
               <TouchableOpacity style={{backgroundColor:"#009688",borderRadius:5,
                marginRight:10,textAlign:"center",width:70,height:30}}>
                   <Text style={{fontWeight:"bold",paddingTop:5,color:"#fff",paddingLeft:7}}>View All</Text>

               </TouchableOpacity>
              
           </View>
           <View>
               <FlatList
               numColumns={3}
               
              contentContainerStyle={{marginTop:25,}}
              showsVerticalScrollIndicator={false}
               data={tests}
               renderItem={({item})=>{
                return renderSpecialists(item)
            }} 
             
             keyExtractor={item=>{item.id}}/>
            </View>
        </View>
    )
}

export default PopularLab

const styles = StyleSheet.create({})
