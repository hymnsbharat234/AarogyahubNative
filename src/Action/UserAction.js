import AsyncStorage from '@react-native-async-storage/async-storage'

// const url="http://todo-reduxtoolkit.vercel.app"
const url = "http://107.21.15.88:4000/api"
const url1="http://107.21.15.88:4000/web"
 
export const fetch2=async(api,body)=>{
    console.log(body)
    console.log('hello')
    const res=await fetch(url+api, {
         method: 'POST',
         crossDomain:true,
         headers: {
             "Content-Type": "application/json",
              
             "Authorization": await  AsyncStorage.getItem('token')
         },
         body: JSON.stringify(body)
     })
     console.log(res)
     return await res.json()
 
 }
  
export const fetch4=async(api)=>{
    const token=await AsyncStorage.getItem('token')
    console.log(token,"dyfu")
    
   
    const res=await fetch(url+api, {
        method: 'POST',
         crossDomain:true,
        
         headers: {
             "Content-Type": "application/json",
              
             "Authorization": `Bearer ${token}`
         },
         
     })
     console.log(res,"gfieha")
    
     return await res.json()
 
 }
 
 
export const fetch3=async(api,type)=>{
     const res=await fetch(url1+api, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "Authorization": await AsyncStorage.getItem('token')
          },
          body: JSON.stringify(body)
      })
      return await res.json()
  
  }