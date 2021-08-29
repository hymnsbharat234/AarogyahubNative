import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'

const PayOnClinic=({name,phone,add_address,flag})=>{
    console.log("fesc",name)
 
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


export default PayOnClinic

const styles = StyleSheet.create({})
