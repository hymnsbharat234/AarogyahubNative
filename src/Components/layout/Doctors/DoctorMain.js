import React from 'react'
import {Text,View,StyleSheet,Image,FlatList, TouchableOpacity,StatusBar,SafeAreaView,Platform} from "react-native"

import Icon from "react-native-vector-icons/Feather"
import Icons from "react-native-vector-icons/Ionicons"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const DoctorMain = (
    {id,avatar,name,fee,department,experience,education,clinicaddr,clinicname,navigation,flag}
) => {
    
   
    return (
        
        <View style={styles.container}>
            
            
        <View style={styles.viewCard}>
            <Card style={[styles.CardContainer,{backgroundColor:'"#fff',borderWidth:1,marginHorizontal:10,height:250,borderRadius:15}]}>
                <View style={{flexDirection:"row",justifyContent:'space-between',borderRadius:15}}>
                    <View style={{marginTop:25,marginLeft:20}}>
                    <Image
                    style={{height:100,width:120,borderRadius:15}}
                    source={{ uri: `https://aarogyahub.com${avatar}` }}/>
                    </View>
                    <View style={{marginTop:20,marginRight:20}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Dr {name}</Text>
                        <Text style={{fontSize:15,
                            width:"70%",
                            backgroundColor:"teal",
                            borderRadius:5,
                            color:'#fff',
                            marginTop:5}}> {experience}+ Year exp</Text>
                        <Text style={{fontSize:15,color:'#03a9f4',
                            marginTop:5,
                            }}>{department} ({education})</Text>


                    </View>
                </View>
                <View style={{marginLeft:20,marginTop:15}}>
                    <View style={{flexDirection:"row"}}>
                      <Icons name="card-outline" size={24} color="teal"/> 
                      <Text style={{fontSize:17,marginLeft:10,fontWeight:"bold"}}>Rs {fee}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                      <Icons name="medkit-outline" size={24} color="teal"/> 
                      <Text style={{fontSize:12,marginLeft:10,fontWeight:'bold'}}>{clinicname} {clinicaddr} </Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderTopWidth:1,borderTopColor:"#9e9e9e54",marginHorizontal:10}}>
                        { flag==="Doctor" ?
                <View style={{marginTop:15,marginHorizontal:10,height:25,borderRadius:10,backgroundColor:"#ff5722",width:"40%"}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("DoctorProfilePage",{id:id})}>
                        <Text style={{textAlign:'center',fontWeight:"400",color:'#fff'}}>View Profile</Text>
                    </TouchableOpacity>
                </View>
            :<View style={{marginTop:15,
            marginHorizontal:10,height:25
            ,borderRadius:10,
            backgroundColor:"#ff5722",width:"80%"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("BookingIndex",{id:id})}>
                <Text style={{textAlign:'center',
                fontWeight:"400",
                color:'#fff'}}>Book Now</Text>
            </TouchableOpacity>
         </View>}
        
         
     

         
         { flag==="Doctor" &&
                <View style={{marginTop:15,marginHorizontal:10,height:25,borderRadius:10,backgroundColor:"teal",width:"40%"}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("BookingIndex",{id:id})}>
                        <Text style={{textAlign:'center',fontWeight:"bold",color:'#fff'}}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                
}

        
                </View>


            </Card>
        </View>
   </View>
    )
}

export default DoctorMain
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
      
    },
    CardContainer:{
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 3},
              shadowOpacity: 0.2,
            },
            android: {
              elevation: 0,
            },
        }),

    },
   
    headerTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#151515',
        
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: 'center'
    },
    viewCard:{
        marginTop:20,
    }
})