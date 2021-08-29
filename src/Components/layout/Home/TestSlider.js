import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image } from 'react-native'
import {Card} from "react-native-paper"
import{useSelector,useDispatch} from "react-redux"


const TestSlider = () => {
    const {HomeDoctor}=useSelector((state) =>state.homeDoctors)
   
    const labs =HomeDoctor ? HomeDoctor.labs:[]

    
    const renderSpecialists = ((item)=>{
        
        return (
        <View style={{overflow:'hidden'}}>
            <Card style={{width:430,height:150,marginLeft:20,marginHorizontal:10,borderWidth:1,
                borderRadius:32,
                boxShadow:"none",}}>
            <View style={{width:"100%",height:"100%",flexDirection:"row"}}>
               <View style={{height:"100%",width:"65%"}}>
               <Image 
               style={{height:"100%",width:"100%",borderRadius:32,}}
               
               source={{uri: `https://aarogyahub.com${item.avatar}`}}/>
              </View>
              <View style={{height:"100%",width:"35%",marginLeft:10,marginTop:10}}>
                  <Text style={{fontWeight:"bold",fontSize:13}} >{item.name}</Text>
                  <Text style={{marginTop:10,fontSize:12,width:102}}>{item.contacts.address}  </Text>
                  <TouchableOpacity style={{marginTop:20,backgroundColor:"#4a148c",borderRadius:5,
                  width:80,height:30}}>
                      <Text style={{color:"#fff",textAlign:"center",paddingTop:3,fontWeight:"bold"}}>Book Now</Text>
                  </TouchableOpacity>

              </View>
              </View>
                
                
            </Card>
            
          
           
             
        </View>
        )
    })
    
    return (
        <View>
           <View style={{flexDirection:"row",
           justifyContent:'space-between',marginTop:10}}>
               <View>
               <Text style={{fontWeight:"bold",
               marginLeft:10,fontSize:18}}>Diagonistic Labs</Text>
               <Text style={{ marginLeft:10,fontWeight:"500",lineHeight:15,
               fontFamily:"Poppins,sans-serif",color:"black",marginTop:5
                }}>Choose your trusted lab available{"\n"}in your city</Text>
               </View>
               <TouchableOpacity style={{backgroundColor:"#009688",borderRadius:5,
                marginRight:10,textAlign:"center",width:70,height:30}}>
                   <Text style={{fontWeight:"bold",paddingTop:5,color:"#fff",paddingLeft:7}}>View All</Text>

               </TouchableOpacity>
              
           </View>
           <View>
               <FlatList
               horizontal
              contentContainerStyle={{marginTop:20,marginHorizontal:5}}
               showsHorizontalScrollIndicator={false}
               data={labs}
               renderItem={({item})=>{
                return renderSpecialists(item)
            }} 
             
             keyExtractor={item=>{item.id}}/>
            </View>
        </View>
    )
}

export default TestSlider

const styles = StyleSheet.create({})
