import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import { OrderValidation } from '../../../Reducer/UserDetails';

import {useDispatch,useSelector} from "react-redux"
import { RadioButton } from 'react-native-paper';
const SelectPayment = ({route}) => {

  const[flag,setflag]=useState(false)
  console.log("flage",flag)


 


  
  const dispatch=useDispatch()
  const{...data} = route.params
  console.log("Name",data)

  const PayOnClinic=()=>{
      const onSubmit=data=>{
      console.log("data",data)
}

    return(
      <View>
        <TouchableOpacity style={{height:40,backgroundColor:"teal",width:250,borderRadius:5}} 
        onPress={() =>onSubmit()}
        >
          <Text style={{textAlign:"center",color:"#fff",fontSize:15,paddingTop:10}}>Confirm</Text>

        </TouchableOpacity>
      </View>
    )
  }

  const PayOnline=()=>{
    return(
      <View>
      
      </View>
    )
  }
 
  
    const [checked, setChecked] =useState('first');
    return (
        <SafeAreaView style={{flex:1}}>

        <View style={{backgroundColor:"#fff",marginTop:10}}>
          <View style={{alignItems:"center"}}>
            <Text style={{fontSize:18,fontWeight:"500"}}>Patient Details</Text>
          </View>
          <View style={{marginTop:10,marginHorizontal:15}}>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>
                Name :
              </Text>
              <Text style={{fontSize:15,fontWeight:"500",padding: 3}}>{data.name}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>
                Age :
              </Text>
              <Text style={{fontSize:15,fontWeight:"500",padding: 3}}>{data.age}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>
                Address :
              </Text>
              <Text style={{fontSize:15,fontWeight:"500",padding: 3}}>{data.address}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>
                Phone :
              </Text>
              <Text style={{fontSize:15,fontWeight:"500",padding: 3}}>{data.phone}</Text>
            </View>
          </View>
        </View>
        <View/>
        <View style={{marginTop:20,backgroundColor:"#fff",flex:1}}>
            <Text style={{padding: 10}}>How do you want to pay the fee?</Text>
            <View style={{flexDirection:"row",marginTop:10}}>
        <RadioButton
          value="first"
          status={ !flag ? 'checked' : 'unchecked' }
          onPress={() => setflag(false)}
        />
        <Text style={{padding:10}}>Pay Offline</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <RadioButton
          value="second"
          status={ flag ? 'checked' : 'unchecked' }
          onPress={() => setflag(true)}
        />
         <Text style={{padding:10}}>Pay Online</Text>
        </View>
        <View style={{marginTop:10,alignItems:"center"}}>
      
        <TouchableOpacity
        onPress={()=>{      
          if(flag)
          dispatch(OrderValidation({...data,pay:"online"}))


          else
          dispatch(OrderValidation({...data,pay:"offline"}))
        }}
        style={{height:40,backgroundColor:"teal",width:250,borderRadius:5}}>
          <Text style={{textAlign:"center",color:"#fff",fontSize:15,paddingTop:10}}>Confirm</Text>

        </TouchableOpacity>
 

        </View>
        </View>
      
      </SafeAreaView>

    )
}

export default SelectPayment

const styles = StyleSheet.create({})
