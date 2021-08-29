import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView,Modal,TextInput, Alert,Button } from 'react-native'
import Icons from "react-native-vector-icons/Ionicons"
import { RadioButton } from 'react-native-paper';
import {Picker} from "@react-native-picker/picker"
import { useForm, Controller } from "react-hook-form";
import Demoform from './PatientForm';
import SomeOnElse from './SomeOnElse';

const timeDetails = ({route}) => {

       const {start,end,available,booked,maxcount,fee,own,other,date,day,name,phone,add_address,navigation,slotIndex,dayIndex,id,did,} = route.params
       const [flag,setFlag] = useState(false)
       

    if(name != undefined){
    return (

        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
           
            <View style={{alignItems:"center"}}>
           <TouchableOpacity 
           style={{borderBottomWidth:1,borderBottomColor:"blue"}}
           onPress={()=>navigation.goBack()}>
               <Text style={{color:"blue"}}>Select Date & Time Again</Text>
               
           </TouchableOpacity>
           </View>
            <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between",marginHorizontal:10}}>
               
                <TouchableOpacity style={{borderWidth:1 ,backgroundColor:"teal"}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Icons name="" size={15} color="#fff"/>
                    <Text style={{color:"#fff"}}> {available} Seats Left</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:1,backgroundColor:"teal"}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
               
                   <Icons name="checkmark-done-circle-outline" size={15} color="#fff"/>
                    <Text style={{color:"#fff"}}> {booked} Seats Booked</Text>
           
                </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",marginTop:10,marginHorizontal:10}}>
                <Text style={{fontWeight:"bold",}}>Date:</Text>
                <Text style={{marginLeft:10}}>{date} ({day.toUpperCase()})</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:10,marginHorizontal:10}}>
                <Text style={{fontWeight:"bold",}}>Selected Time:</Text>
                <Text style={{marginLeft:10}}>{start}-{end}</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:10,marginHorizontal:10}}>
                <Text style={{fontWeight:"bold",}}>Appointment Number:</Text>
                <Text style={{marginLeft:10}}>{booked+1}</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:10,marginHorizontal:10}}>
                <Text style={{fontWeight:"bold",}}>Booking Fees:</Text>
                <Text style={{marginLeft:10}}>Rs  {fee}</Text>
            </View>
         
            <ScrollView>
            <View>
               <View>
                   <Text style={{margin:10,fontSize:18,fontWeight:"500"}}>Enter Patient Details</Text>
                   <View>
                       <View style={{flexDirection:"row"}} >
                     <RadioButton
                            value="first"
                            status={ !flag ? 'checked' : 'unchecked' }
                            onPress={() => setFlag(false)}

                        />
                        <Text style={{paddingTop:8,paddingLeft:5,fontWeight:"500"}}>Booking  for {name} </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <RadioButton
                            value="second"
                            status={ flag ? 'checked' : 'unchecked' }
                            onPress={() => setFlag(true)}
                        />
                        <Text style={{paddingTop:8,paddingLeft:5,fontWeight:"500"}}>Someone else</Text>
                        </View>
                        </View>
                      
                        { !flag && <Demoform name={name} address={add_address} phone={phone} 
                        navigation={navigation} slotindex={slotIndex} dayindex={dayIndex} id={id} did={did} date={date} start={start}/>}
                        { flag && <SomeOnElse name="" address="" phone="" navigation={navigation} 
                        slotindex={slotIndex} dayindex={dayIndex} id={id} did={did} date={date} start={start}/>}

                   
                     
                      
               </View>
           </View>
           </ScrollView>
            
        </SafeAreaView>
    )
                            }
                            else{
                                return (
                                <View>
                                    <Text>Loading..</Text>
                                </View>
                                )
                            }
}

export default timeDetails

const styles = StyleSheet.create({
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
      },
      button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
      },
    
      input: {
        backgroundColor: 'white',
        borderColor: '#bdbdbd',
        borderWidth:1,
        
        height: 40,
        padding: 10,
        borderRadius: 4,
      },
})
