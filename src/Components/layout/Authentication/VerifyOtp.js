import React,{useState,useRef,useEffect} from 'react'
import {StyleSheet,View,Text,TextInput, TouchableOpacity,StatusBar,SafeAreaView} from "react-native"
import Svg,{Path} from "react-native-svg"


import {useDispatch,useSelector} from "react-redux"
import {VerifyOtp,resendOTP} from "../../../Reducer/AuthReducer"
import Icon from "react-native-vector-icons/Feather"



const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
const AUTO_SUBMIT_OTP_TIME_LIMIT = 4; // 4 secs

const Verify=({route})=>{
    const sphone = route.params;
    var nphone = '';
    if(sphone.phone) {
        nphone = sphone.phone
    }
    const dispatch =useDispatch()
    const[OTP,setOTP]=useState()
    const[loading,setloading]=useState()



    const resendOTP=(data)=>{
        dispatch(resendOTP(data))

    }

  

  
   

  
    const onSubmit=(data)=>{
        dispatch(VerifyOtp(data))
        console.log(data,"data")
    }

   
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity>
                     <Icon name="chevron-left" size={24}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerTitle}>Verification code</Text>
                    </View>
                    <View
                     style={{
                         width:20,
                     }}/>

                </View>
            </SafeAreaView>
            <View>
                <View style={styles.svgWrapper}>
                    <Svg viewBox=" 0 0 1440 320">
                    <Path fill="#5566ee" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>

                    </Svg>
                </View>
               
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Confirmation
                </Text>
                <Text style={styles.subtitle}>
                   Sent via SMS to 
                </Text>
                <View style={styles.otpWrapper}>
               
              
               
                     
                <TextInput 
                 maxLength={1}
                 keyboardType={"numeric"}
                 value={OTP}
                 onChangeText={()=>setOTP()}
               
                 style={[styles.otpButton,{
                   backgroundColor:'#fff',
                   textAlign:'center',
                   fontSize:20,
                 }]}/>
               <TextInput 
               maxLength={1}
               keyboardType={"numeric"}
               value={OTP}
               onChangeText={()=>setOTP()}
              
               style={[styles.otpButton,{
                   backgroundColor:'#fff',
                   textAlign:'center',
                   fontSize:20,
                 }]}/>
                 
              
               
                 <TextInput
                  maxLength={1}
                  keyboardType={"numeric"}
                  value={OTP}
                  onChangeText={()=>setOTP()}
                 
                 style={[styles.otpButton,{
                   backgroundColor:'#fff',
                   textAlign:'center',
                   fontSize:20,
                 }]}/>
                <TextInput
                 maxLength={1}
                 keyboardType={"numeric"}
                 value={OTP}
                 onChangeText={()=>setOTP()}
              
                style={[styles.otpButton,{
                   backgroundColor:'#fff',
                   textAlign:'center',
                   fontSize:20,
                 }]}/>
               <TextInput 
                maxLength={1}
                keyboardType={"numeric"}
                value={OTP}
                onChangeText={()=>setOTP()}
               
               style={[styles.otpButton,{
                   backgroundColor:'#fff',
                   textAlign:'center',
                   fontSize:20,
                 }]}/>
              <TextInput 
               maxLength={1}
               keyboardType={"numeric"}
               value={OTP}
               onChangeText={()=>setOTP()}
            
              style={[styles.otpButton,{
                   backgroundColor:'#fff',
                   textAlign:'center',
                   fontSize:20,
                 }]}/>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={()=>resendOTP()}>
                <Text style={styles.buttonResend}>Resend Code</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonVerifyWrapper}>
              <TouchableOpacity 
              onPress={onSubmit}
              style={styles.buttonVerify}>
                  <Text style={styles.textButtonVerify}>Verify</Text>
             </TouchableOpacity> 

            </View>
            </View>
         
           
           
        </View>
    )
}

export default Verify

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex:1,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: 'center'
    },
    textOtp:{
        fontSize:25,
        fontWeight:"bold",
        
    },
    headerTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#151515',
        
    },
    svgWrapper:{
        height:100,
    },
    content:{
        backgroundColor:"#5566ee",
        flex:1,
        marginTop:-15,
        paddingHorizontal:40,
        paddingTop:20,
    },
    title:{
        textTransform:"uppercase",
        color:"#fff",
        fontWeight:"bold",
        fontSize:24,
    },
    subtitle:{
        color:"#a2b2fd",
        textAlign:'center',
        paddingVertical:20,
        fontSize:18,
        fontWeight:"600",
    },
    otpWrapper:{
        flexDirection:"row",
       marginVertical:10,
    },
   otpButton:{
       width:40,
       height:50,
       borderRadius:30,
       marginHorizontal:5,
       alignItems:'center',
       justifyContent:'center'
   },
   borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  buttonWrapper:{
      alignItems: 'center',
      marginVertical:20

  },
  buttonResend:{
      fontSize:14,
      fontWeight:"bold",
      color:"#8a9af8",
      textTransform:"uppercase",

  },
  buttonVerifyWrapper:{
      marginVertical:10,
      alignItems: 'center'

  },
  textButtonVerify:{
      color:"#fff",
      fontSize:18,
      textTransform:"uppercase",
      fontWeight:"bold"

  },
  buttonVerify:{
      backgroundColor:"#7788ef",
      paddingHorizontal:30,
      paddingVertical:20,
      width:"100%",
      borderRadius:10,
      alignItems: 'center'



  },
})
