import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="black" />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({})
