import React ,{useEffect}from 'react'
import { View, Text,SectionList, FlatList } from 'react-native'
import {useDispatch,useSelector} from "react-redux"
import Icons from "react-native-vector-icons/Ionicons"

const Overview = ({ name,department,experience_count,degree,clinicaddr,clinicname,education,awards,specialisation,services,experience,key}) => {
    // const awards= route.params.awards.length === 0 ? "" : "Awards";
    // const work= route.params.experience.length === 0 ? "" : "Work & Experience";
    // const services = route.params.services ? "" : "Services";
    // const specialisation = !route.params.specialisation ? "" : "Specialization";
    
   const renderEducation=()=>{
       return(
      education.map((edu,index)=>{
          key={edu}
          console.log(edu)
      

         
         
           return (
               <>
               <View style={{display:'block'}} key={edu.id}>
               <View style={{marginTop:3}}>
                <Icons name="options-outline" size={24} color="teal"/>
                </View>
               <View>
                   <Text style={{fontWeight:"bold"}}>{edu.college}{"\n"}{edu.degree}{"\n"}{edu.yoc}</Text>
               </View>
               
               </View>
               </>
             
           )
       })
       )
   }


    return(

        <View>
        <View>
            <Text style={{margin:10,fontSize:18,fontWeight:"500",}}>About Me</Text>
            <Text style={{margin:10,marginTop:-5,color: "#484848"}}> hii My Self {name} fwregrhwrgg wegwregtwrg dwegrghwe hjy5ds fsgg3r5hye efrgethet   gery3rgqefrhy ergqergsd eregerg</Text>
        </View>
        <View>
            <View>
            <Text style={{margin:10,fontSize:18,fontWeight:"500",}}>Education</Text>
            <View style={{marginHorizontal:15}}>
               
                <View style={{marginLeft:20}}>
                <Text>{renderEducation()}</Text>
                
                </View>
                
            </View>
            </View>
        </View>
        <View>
            <View>
            <Text style={{margin:10,fontSize:18,fontWeight:"500",fontFamily:"system-ui"}}>Work Experience</Text>
            <View style={{marginHorizontal:15,flexDirection:"row"}}>
              
                <View style={{marginLeft:20}}>
                <Text>Sadar Hospital</Text>
                <Text>Dumka</Text>
                </View>
                
            </View>
            </View>
        </View>
        <View>
            <View>
            <Text style={{margin:10,fontSize:18,fontWeight:"500",fontFamily:"system-ui"}}>Services</Text>
            <View style={{marginHorizontal:15,flexDirection:"row"}}>
                <View style={{marginTop:3}}>
                <Icons name="options-outline" size={24} color="teal"/>
                </View>
                <View style={{marginLeft:20}}>
                <Text>Wakanda ka Pasu</Text>
                
                </View>
                
            </View>
            </View>
            
        </View>
          <View/>
      </View>
    )
}

export default Overview
