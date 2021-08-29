import React,{useState} from 'react';
import {StyleSheet,View,Text,TextInput, TouchableOpacity} from "react-native"
import PhoneInput from 'react-native-phone-number-input'
import { useForm,Controller } from 'react-hook-form';
import {useDispatch,useSelector} from "react-redux"
import {signupUser} from '../../../Reducer/AuthReducer'
const Phone=({navigation})=>{

    const dispatch =useDispatch()
    const {error,errorMsg} = useSelector((state) => state.user)
    const {control,handleSubmit,reset,formState: { errors }} =useForm({
        defaultValue:{
            phone:"",
            
        }
    })
     const Submit=(data)=>{
         dispatch(signupUser({...data,navigation}))
         console.log(navigation)


     }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View>
               

                <View style={{marginBottom:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Enter your Phone Number
                </Text>
                <View style={{marginTop:10}}>
                <Controller
            control={control}
            render={({field:{onChange, onBlur, value }})=>(
            <TextInput
            placeholder="phone"
         
            mode="outlined"
            
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
         
            // style={styles.inputStyle}
           />
           )}
           name="phone"
           rules={{required:true}}
           />
           {error && <View style={{marginTop:5}}>
                <Text style={{fontSize:10,fontWeight:'bold'}}>
                   {errorMsg}
                </Text>
                </View>}
             {errors.phone && <Text>This is required.</Text>}
                
                </View>
                
                </View>
                
                <View style={{alignItems:'center',marginTop:20}}>
                <TouchableOpacity style={{width:200,height:40,borderRadius:5,backgroundColor:'teal'}}
                onPress={handleSubmit(Submit)}
                >
                    <Text style={{
                        textAlign:'center',
                        paddingTop:5,

                        fontSize:16,
                        color:"white",
                        fontWeight:'bold'}}>Continue</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
export default Phone