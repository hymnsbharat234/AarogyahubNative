import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image } from 'react-native'
import {Card} from "react-native-paper"
import{useSelector,useDispatch} from "react-redux"


const Specialists = ({navigation}) => {
    const {HomeDoctor}=useSelector((state) =>state.homeDoctors)
   
    const specialities =HomeDoctor ? HomeDoctor.specialities:[]
   
    const renderSpecialists = ((item)=>{
      
        return (
        <View style={{overflow:'hidden'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("FetchSpecialist",{department:item.department})}>
            <View style={{width:87,marginLeft:20,marginHorizontal:10,boxShadow:"none"}}>
               
               <Image 
               style={{height:87,borderRadius:32}}
               
               source={{uri: `https://aarogyahub.com${item.avatar}`}}/>
              
                
                
            </View>
            <View style={{marginTop:12,justifyContent:"space-around"}}>
            <Text style={{fontSize:13,paddingRight:5,
                textAlign:'center',
                paddingLeft:12,fontWeight:"500"}}>{item.department}</Text>
               <Text style={{fontSize:12,textAlign: 'center',
               width:131,fontWeight:"700",fontFamily:"Poppins sans-serif",paddingLeft:10,overflow:'hidden'}}>{item.description}</Text>
               
              </View>
              </TouchableOpacity>
          
           
             
        </View>
        )
    })
    
    return (
        <View>
           <View style={{flexDirection:"row",
           justifyContent:'space-between',marginTop:10}}>
               <View>
               <Text style={{fontWeight:"bold",
               marginLeft:10,fontSize:18}}>Clinic and Specialities</Text>
               <Text style={{ marginLeft:10,fontWeight:"500",lineHeight:15,
               fontFamily:"Poppins,sans-serif",color:"black",marginTop:5
                }}>Start your care now by choosing{"\n"}from our top specialities</Text>
               </View>
               <TouchableOpacity 
               onPress={()=>navigation.navigate("SpecialistPage")}
               style={{backgroundColor:"#009688",borderRadius:5,
                marginRight:10,textAlign:"center",width:70,height:30}}>
                   <Text style={{fontWeight:"bold",paddingTop:5,color:"#fff",paddingLeft:7}}>View All</Text>

               </TouchableOpacity>
              
           </View>
           <View>
               <FlatList
               horizontal
              contentContainerStyle={{marginTop:20}}
               showsHorizontalScrollIndicator={false}
               data={specialities}
               renderItem={({item})=>{
                return renderSpecialists(item)
            }} 
             
             keyExtractor={item=>{item.id}}/>
            </View>
        </View>
    )
}

export default Specialists

const styles = StyleSheet.create({})
