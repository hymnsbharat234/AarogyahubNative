import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'


import {DoctorProfile} from "../../../Reducer/DoctorProfile"
import {UserDetails} from "../../../Reducer/UserDetails"
import {useDispatch,useSelector} from "react-redux"
import LoaderPage from "../Loader/Loader"
const slotPage=({navigation,route,fee})=>{
    const dispatch=useDispatch()
    const {doctorsProfile}=useSelector((state) =>state.doctorProfile)

  
    

    const sehedule_time=doctorsProfile? doctorsProfile.schedule_time:[]
      const {UserProfile}=useSelector((state) =>state.UserDetails)
    const userDetail=UserProfile ? UserProfile.user : []


  
    
    useEffect(()=>{
      
        dispatch(DoctorProfile())
        dispatch(UserDetails())
        
        },[])
        const {name,phone,add_address}=userDetail

    

        const renderList=((item,dayIndex)=>{


         

            const {date,day,slots,id}=item

            

            
          
           const renderLists=((item,index)=>{
          
            if(name!=undefined){
        
                return(
                    

                    <View>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("timeDetailsPage",{start:item.start,
                            end:item.end,booked:item.booked,available:item.available,maxcount:item.maxcount,fee:fee,
                            date:date,day:day,name:name,phone:phone,add_address:add_address,navigation:navigation,other:false,own:true,slotIndex:index,dayIndex:dayIndex,did:doctorsProfile.id,id:id})}
                        style={{borderWidth:1,borderRadius:5
                            ,width:83,height:50,marginLeft:20,marginBottom:15,borderColor:"teal",backgroundColor:"#e0e0e0"}}>
                            <Text style={{textAlign:"center",color:"teal"}}>{item.start}-{item.end}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }else{
                return(
                <View>
                    <Text>Loading...</Text>
                </View>
                )
            }
            })


            return(

                <View style={{marginTop:10}} >
                     <Text style={{marginLeft:25,fontWeight:"bold",fontSize:16,color:"teal"}}>
                         {day.slice(0,3).toUpperCase()}</Text>
                    <Text style={{marginLeft:25,marginTop:7}}>{date.slice(0,5)}</Text>
                    <View style={{marginTop:30}}>
                        <FlatList
                        data={slots}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item,index})=>{
                          return renderLists(item,index)
                      }}    
                  
               
                    keyExtractor={item=>{item.id}}
                        />
                    </View>
                    </View>
                    
            )


        })


    return(
        <View style={{marginTop:10,backgroundColor:"#fff"}}>
           <View style={{alignItems:"center",
           borderBottomWidth:1,marginTop:10,borderBottomColor:"#e0e0e0"}}>
               <Text style={{fontSize:18,fontWeight:"500",paddingBottom:5}}>Please select the timing</Text>
           </View>
     

          <FlatList
          data={sehedule_time}
          horizontal
          renderItem={({item,index})=>{
            return renderList(item,index)
        }}    
    
 
      keyExtractor={item=>{item.id}}
          
          />
        </View>
        
    )
}
export default slotPage