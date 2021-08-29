import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'


const HEADER_MAX_HEIGHT =120
const HEADER_MIN_HEIGHT=70
const PROFILE_MAX_HEIGHT=80
 const PROFILE_MIN_HEIGHT=40

const Header2 = () => {
    return (
        <View style={{flex:1}}>
            <View style={{
                position:"absolute",
                top:0,
                left:0,
                right:0,
                backgroundColor:"teal",
                height:HEADER_MAX_HEIGHT
            }}>
            </View>  
            <View style={{flex:1}}>
                <View style={{
                    height:PROFILE_MAX_HEIGHT,
                    width:PROFILE_MAX_HEIGHT,
                    borderRadius:PROFILE_MAX_HEIGHT /2,
                    borderColor:"#fff",
                    borderWidth:3,
                    overflow:"hidden",
                    marginTop:55,
                    marginLeft:10,
                }}>
                    <Image 
                    style={{flex:1,width:null,height:null}}
                    source={require("../../../../assets/ICONS RISHI/iconsAa/yy.jpg")}/>

                </View>
            </View>

        </View>
    )
}

export default Header2

const styles = StyleSheet.create({})
