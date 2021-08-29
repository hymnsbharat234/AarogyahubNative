import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoaderPager from "../../Loader/Loader"
import {UserAppointment} from "../../../../Reducer/UserDetails"
import {useDispatch,useSelector} from "react-redux"
const AppointmentList = () => {
    const [loading,setloading]=useState(false)
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(UserAppointment())
    })

    useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000)
    },[])
    return (
        <>
        {loading ?(
            <LoaderPager/>

        ):(
            <View>
                <Text>Appointment Page</Text>
            </View>

        )}
        </>
        
    )
}

export default AppointmentList

const styles = StyleSheet.create({})
