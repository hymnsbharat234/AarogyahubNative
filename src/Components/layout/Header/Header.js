import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput,StatusBar,Platform,ScrollView } from 'react-native'
import COLORS from "../constants/colors"
import Icon from "react-native-vector-icons/Ionicons"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"

const Header = () => {
    return (
        <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor={COLORS.primary}/>
    
        <View style={styles.header}>
          <Icons name="sort" size={28} color={COLORS.white}/>
         
          <Icon name="notifications-outline" size={28} color={COLORS.white}/>
         </View>
        
        <View 
        style={{backgroundColor:COLORS.primary,height:100,
        paddingHorizontal:20}}>
          <View style={{flex:1}}>
          <Text style={styles.headerTitle}>
             AarogyHub
          </Text>
          <View style={styles.inputContainer}>
            <Icon name="search-outline" size={28}/>
            <TextInput
            placeholder="Search Here"
            
            style={{color:COLORS.dark,paddingLeft:10,width:"80%",fontWeight:"bold",fontSize:16}}
            />

          </View>
          </View>

        </View>
     
   
     

  
     
    </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        
       backgroundColor:COLORS.white
      },
      header:{
        paddingHorizontal:20,
        
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:COLORS.primary,
        
      },
      headerTitle:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:23,

      },
      inputContainer:{
        height:45,
        width:"100%",
        backgroundColor:COLORS.white,
        borderRadius:10,
        position:"absolute",
        top:50,
        flexDirection:"row",
        paddingHorizontal:20,
        alignItems:"center",
        
      }
})
