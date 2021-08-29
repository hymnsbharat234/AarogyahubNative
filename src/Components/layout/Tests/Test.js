import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import HeaderPage from "../Header/Header"
import OptionPage from "./Options"
import TestSliderPage from "../Home/TestSlider"
import PopularLabPage from "../Home/PopularLab"
const Tests = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <HeaderPage/>
            <ScrollView>
            <OptionPage/>
            <PopularLabPage/>
            <TestSliderPage/>

            </ScrollView>
           
        </SafeAreaView>
    )
}

export default Tests

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#fff',
        
    }
})
