import React ,{useEffect}from 'react';
import {Icon} from "react-native-elements"
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SlotPage from "../layout/BookingPage/Slot"
import timeDetailsPage from "../layout/BookingPage/timeDetails"
import ProfilePage from "./Account/Profile"
import TestPage from "./Tests/Test"
import UserProfilePage from "./Account/Patient/UserProfile"
import BookingIndex from "../layout/BookingPage/index"
import UpdateProfilePage from "./Account/Patient/UpdateProfile"
import SelectPaymentPage from "./BookingPage/SelectPayment"
import DocotroPage from "../layout/Doctors/DoctorsList"
import OverViewPage  from '../layout/Doctors/Overview'
import FetchSpecialist from "../layout/Home/SpecialistDoctor"

import DoctorProfilePage from "../layout/Doctors/DoctorsProfile"
import fecthdoctorProfile from "../layout/Home/DoctorProfile"
import {addToken} from '../../Reducer/AuthReducer'
import SpecialistPage from "../layout/Specialist/SpecialistList"
import AppointmentListPage from "./Account/Patient/AppointmentList"



import {useSelector,useDispatch} from "react-redux"
const RootStack =createStackNavigator();
import HomePage from "../layout/Home/Home"


const Tab = createMaterialBottomTabNavigator();


const PlanLayout=({navigation})=>{
    
   
    return (
    

       
        <>
     
        <Tab.Navigator
      initialRouteName="HomePage"
      activeColor="#fff"
      barStyle={{ backgroundColor: 'teal' }}
    >
      <Tab.Screen
        name="Feed"
    
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      >
          {()=>(
          <RootStack.Navigator headerMode='none'   >
              <RootStack.Screen component={HomePage} name="HomePage"/>
              <RootStack.Screen component={FetchSpecialist} name="FetchSpecialist"/>
             
              <RootStack.Screen component={fecthdoctorProfile} name="fecthdoctorProfile"/>
              <RootStack.Screen component={SpecialistPage} name="SpecialistPage"/>
              <RootStack.Screen component={BookingIndex} name="BookingIndex"options={{
              title: "Booking Page",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
              <RootStack.Screen component={timeDetailsPage} name="timeDetailsPage"options={{
              title: "Appointment Page",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
             <RootStack.Screen component={SelectPaymentPage} name="SelectPaymentPage"options={{
              title: "Select Payment",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
            
    

              
             

              
         </RootStack.Navigator>
         )}
    </Tab.Screen>
      <Tab.Screen
        name="Doctors"
        options={{
            tabBarLabel: 'Doctors',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="doctor" color={color} size={26} />
            ),
          }}
        >
            {()=>(
                
               <RootStack.Navigator    >
                  <RootStack.Screen component={DocotroPage} name="DoctorPage"  options={{headerShown: false }} /> 
                  <RootStack.Screen component={DoctorProfilePage} name="DoctorProfilePage" options={{
                     
                  }}/>     
                  <RootStack.Screen component={OverViewPage} name="OverViewPage"/>
                  <RootStack.Screen component={BookingIndex} name="BookingIndex"options={{
              title: "Booking Page",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
              <RootStack.Screen component={SlotPage} name="SlotPage"options={{
              title: "Booking Page",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
              <RootStack.Screen component={timeDetailsPage} name="timeDetailsPage"options={{
              title: "Appointment Page",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
            <RootStack.Screen component={SelectPaymentPage} name="SelectPaymentPage"options={{
              title: "Select Payment",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
              </RootStack.Navigator>
              
              
            )}
           
       
       
        </Tab.Screen>
      
       <Tab.Screen
        name="Test"
        component={TestPage}
        options={{
          tabBarLabel: 'Lab Test',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="flask" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
       
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      >
        {() =>(
          <RootStack.Navigator>
             <RootStack.Screen component={ProfilePage} name="ProfilePage" options={{headerShown: false }}/>
            <RootStack.Screen component={AppointmentListPage} name="AppointmentListPage"options={{
              title: "Appointment",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
            <RootStack.Screen component={UserProfilePage} name="UserProfilePage"options={{
              title: "My Profile",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
             <RootStack.Screen component={UpdateProfilePage} name="UpdateProfilePage"options={{
              title: "Update Profile",
              headerStyle:{
                backgroundColor:"teal"
              },
              headerTintColor:"#fff"
              
            }} />
          </RootStack.Navigator>
          
          
        )}
      </Tab.Screen>
    </Tab.Navigator>
  
      </>
    )
}

export default PlanLayout;
