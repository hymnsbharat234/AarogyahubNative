import React,{useState,useEffect} from 'react'
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet, Alert } from 'react-native'
import {useSelector,useDispatch} from "react-redux"
import { useForm,Controller } from 'react-hook-form';
import { signinUser } from '../../../Reducer/AuthReducer'

const Auth = ({navigation,route}) => {

    const sphone = route.params;
    var nphone = '';
    if(sphone.phone) {
        nphone = sphone.phone
    }


    const dispatch=useDispatch();
    
    const {control,handleSubmit,reset,formState: { errors }} =useForm({
        defaultValue:{
            phone:nphone,
            password:""
        }
    });

 
    


   
    const onSubmit=(data)=>{
        dispatch(signinUser(data))
        
        navigation.navigate("DoctorPage")
        console.log("reuu",data)
    }
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Controller
            control={control}
            render={({field:{onChange, onBlur, value }})=>(
            <TextInput
            placeholder="Phone"
         
            mode="outlined"
            theme={theme}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
         
            style={styles.inputStyle}
           />
           )}
           name="phone"
           rules={{required:true}}
           />
             {errors.phone && <Text>This is required.</Text>}
           <Controller
            control={control}
            render={({field:{ onChange, onBlur, value }})=>(
            <TextInput
            placeholder="password"
         
            mode="outlined"
            theme={theme}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            
         
            style={styles.inputStyle}
           />
           )}
           name="password"
           rules={{required: true}}
           />
           {/* {errors.firstName && <Text>This is required.</Text>} */}
           {errors.password  && <Text style={{marginLeft:5,fontWeight:'500'}}>This is required!.</Text>}
          
            
            
          
           <TouchableOpacity style={{alignItems:"flex-end",marginHorizontal:20,width:200,marginRight:5}}
        
        >
            <Text style={{textAlign:"center",fontWeight:'500',fontSize:13,color:"#e91e63"}}>Forgot Password</Text>
        </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:1,marginHorizontal:20,marginTop:10,width:200}}
            onPress={handleSubmit(onSubmit)}
            >
                <Text style={{textAlign:"center",fontWeight:'500',fontSize:17}}>Login</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={{borderWidth:1,marginHorizontal:20,marginTop:10,width:200}}
            onPress={()=>navigation.navigate("PhonePage")}
            >
                <Text style={{textAlign:"center",fontWeight:'500',fontSize:17}}>Create Account</Text>
            </TouchableOpacity>
          
               
         
         
               
         
        </View>
    )
}
const theme={
    colors:{
        primary:"teal"
    }
}

export default Auth
const styles = StyleSheet.create({
    inputStyle:{
        margin:5,
        borderBottomWidth:2,
        marginHorizontal:20,
        width:200
    },
    modalButtonView:{
        flexDirection:'row',
        justifyContent: "space-between",
        padding:10

    }

})
