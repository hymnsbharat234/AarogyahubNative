import React from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from  '../../../Reducer/AuthReducer'
import Icons from "react-native-vector-icons/Feather"
import HeaderPage2 from "../Header/Header2"
const Profile = ({navigation}) => {
    const dispath = useDispatch()
    return (
        <View style={styles.container}>
            <HeaderPage2/>
            <ScrollView>
               
                <View style={{marginTop:80}} >
              <View style={{borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                  <TouchableOpacity>
                      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10}}>
                          <View style={{flexDirection:"row",marginTop:10}}>
                              <Icons name= "shopping-bag" 
                              style={{
                                  marginLeft:10
                              }}
                              size={20} color="teal"/>
                              <Text style={{marginLeft:10,fontWeight:"600",fontSize:17}}>Orders</Text>
                              
                          </View>
                          <View style={{marginTop:10,marginRight:5}}>
                          <Icons name="chevron-right" 
                          size={20} color="teal"/>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                  <TouchableOpacity onPress={()=>navigation.navigate("AppointmentListPage")}>
                      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10}}>
                          <View style={{flexDirection:"row",marginTop:10}}>
                              <Icons name= "calendar" 
                              style={{
                                  marginLeft:10
                              }}
                              size={20} color="teal"/>
                              <Text style={{marginLeft:10,fontWeight:"600",fontSize:17}}>My Appointment</Text>
                              
                          </View>
                          <View style={{marginTop:10,marginRight:5}}>
                          <Icons name="chevron-right" 
                          size={20} color="teal"/>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                  <TouchableOpacity>
                      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10}}>
                          <View style={{flexDirection:"row",marginTop:10}}>
                              <Icons name= "star" 
                              style={{
                                  marginLeft:10
                              }}
                              size={20} color="teal"/>
                              <Text style={{marginLeft:10,fontWeight:"600",fontSize:17}}>My Favorites</Text>
                              
                          </View>
                          <View style={{marginTop:10,marginRight:5}}>
                          <Icons name="chevron-right" 
                          size={20} color="teal"/>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                  <TouchableOpacity>
                      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10}}>
                          <View style={{flexDirection:"row",marginTop:10}}>
                              <Icons name= "file-text" 
                              style={{
                                  marginLeft:10
                              }}
                              size={20} color="teal"/>
                              <Text style={{marginLeft:10,fontWeight:"600",fontSize:17}}>My Medical Records</Text>
                              
                          </View>
                          <View style={{marginTop:10,marginRight:5}}>
                          <Icons name="chevron-right" 
                          size={20} color="teal"/>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                  <TouchableOpacity>
                      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10}}>
                          <View style={{flexDirection:"row",marginTop:10}}>
                              <Icons name= "settings" 
                              style={{
                                  marginLeft:10
                              }}
                              size={20} color="teal"/>
                              <Text style={{marginLeft:10,fontWeight:"600",fontSize:17}}>Settings</Text>
                              
                          </View>
                          <View style={{marginTop:10,marginRight:5}}>
                          <Icons name="chevron-right" 
                          size={20} color="teal"/>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                  <TouchableOpacity onPress={()=>navigation.navigate("UserProfilePage")}>
                      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10}}>
                          <View style={{flexDirection:"row",marginTop:10}}>
                              <Icons name= "edit" 
                              style={{
                                  marginLeft:10
                              }}
                              size={20} color="teal"/>
                              <Text style={{marginLeft:10,fontWeight:"600",fontSize:17}}>My Profile</Text>
                              
                          </View>
                          <View style={{marginTop:10,marginRight:5}}>
                          <Icons name="chevron-right" 
                          size={20} color="teal"/>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={{borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                  <TouchableOpacity onPress={()=>dispath(logout())}>
                      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10}}>
                          <View style={{flexDirection:"row",marginTop:10}}>
                              <Icons name= "log-out" 
                              style={{
                                  marginLeft:10
                              }}
                              size={20} color="teal"/>
                              <Text style={{marginLeft:10,fontWeight:"600",fontSize:17}}>Logout</Text>
                              
                          </View>
                          <View style={{marginTop:10,marginRight:5}}>
                          <Icons name="chevron-right" 
                          size={20} color="teal"/>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              </View>
              
              
              
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    }

})
