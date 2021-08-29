import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'

const PayOnline=({name,phone,add_address})=>{
    return(
      <View>
        <TouchableOpacity style={{height:40,backgroundColor:"teal",width:250,borderRadius:5}}>
          <Text style={{textAlign:"center",color:"#fff",fontSize:15,paddingTop:10}}>Confirm+</Text>

        </TouchableOpacity>
      </View>
    )
  }

export default PayOnline

const styles = StyleSheet.create({})
