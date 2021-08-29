import React from 'react'
import { StyleSheet, Text,SectionList, View,TouchableOpacity,FlatList,Image } from 'react-native'
import {Card} from "react-native-paper"
import{useSelector,useDispatch} from "react-redux"
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
const DoctorSlider = ({BookingIndex}) => {
    const {HomeDoctor}=useSelector((state) =>state.homeDoctors)
    const navigation = useNavigation();
    
    const premium_doctors= HomeDoctor ? HomeDoctor.premium_doctors:[]
    const doctors =HomeDoctor ? HomeDoctor.doctors:[]

    const renderDoctorsSlider = ((item)=>{
        console.log("id",item.id)
       
        return (
            
        <View style={{overflow:'hidden'}}>
            <Card style={{width:180,height:230,marginRight:10,borderBottomWidth:1,marginLeft:2,borderRadius:10}}
            
            >

            <Image style={{width:"100%",height:"55%",borderTopLeftRadius:10,borderTopRightRadius:10}}
            source={{uri: `https://aarogyahub.com${item.avatar}`}}
            />
            <View style={{marginLeft:10,marginTop:5}}>
                <Text style={{fontSize:15,fontWeight:"bold",color:"#004d40",fontFamily:"sans-serif"}}>Dr. {item.name}</Text>
                <Text style={{fontSize:13,fontWeight:"700",color:"black"}}>{item.department}</Text>
                <Text style={{fontSize:15,fontWeight:"bold",color:"#37474f",fontFamily:"sans-serif",marginTop:3}}>Rs {item.fee}</Text>

            </View>
           
            <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:15}}>
                 
                    
                    
                <View style={{flexDirection:"row",marginHorizontal:5}}>
               <TouchableOpacity
               onPress={()=>navigation.navigate("fecthdoctorProfile",{id:item.id})}
               style={{
                   flexDirection:"row",
                   borderRadius:4,
                   backgroundColor:"#004d40",
                   

                   
               }}> 
                   <Text style={{color:"#fff",fontSize:13}}>View Profile</Text>
                  
                  <Icons name="arrow-forward-outline" size={13} 
                 style={{paddingTop:4,paddingLeft:5}}
                  color="#fff"/>
                  </TouchableOpacity>
               
                </View> 
                <View style={{flexDirection:"row",marginHorizontal:5}}>
                
                <TouchableOpacity 
                onPress={()=>navigation.navigate("BookingIndex",{id:item.id})}
                style={{
                   flexDirection:"row", borderRadius:4,
                   backgroundColor:"#004d40"
               }}> 
                   <Text style={{color:"#fff",fontSize:13,}}>Book Now</Text>
                  
                  <Icons name="arrow-forward-outline" size={13} color="#fff"
                  style={{paddingTop:4,paddingLeft:5}}
                  />
                  </TouchableOpacity>
                
                </View>
            </View>
          

            </Card>
           
            
           
             
        </View>
        )
    })

   
    
    return (
        <View style={{marginTop:10,marginBottom:10}}>
           <View style={{flexDirection:"row",
           justifyContent:'space-between',marginTop:10}}>
               <View>
               <Text style={{fontWeight:"bold",
               marginLeft:10,fontSize:18}}>Book Appointment</Text>
               <Text style={{ marginLeft:10,fontWeight:"500",lineHeight:15,
               fontFamily:"Poppins,sans-serif",color:"black",marginTop:5
                }}>Now start booking appointment with top{"\n"}doctors in your city</Text>
               </View>
               <TouchableOpacity 
               onPress={()=>navigation.navigate("DoctorPage")}
               style={{backgroundColor:"#009688",borderRadius:5,
                marginRight:10,textAlign:"center",width:70,height:30}}>
                   <Text style={{fontWeight:"bold",paddingTop:5,color:"#fff",paddingLeft:7}}>View All</Text>

               </TouchableOpacity>
              
           </View>
           <View>
              
                 <SectionList
                  horizontal
                  contentContainerStyle={{marginTop:20}}
                   showsHorizontalScrollIndicator={false}
                    sections={[
                     {data:premium_doctors},
                    {data:doctors}
             ]}
            renderItem={({item})=>{
                return renderDoctorsSlider(item)
            }}    
        
     
          keyExtractor={(item,index)=>{
              
            return item.id
        }}
         />
            </View>
            
           
        </View>
        
    )
}

export default DoctorSlider

const styles = StyleSheet.create({})
