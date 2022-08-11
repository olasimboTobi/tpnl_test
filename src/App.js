import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'



// const objFlat = (object1) => {
//   const objects = []
//   object.key(object1).map(objKey => {
    
//     let value = object1[objKey]
//     if(typeof value != object){
//       objects.push(value)
//     }else{
//       objects= [...objects, ...objFlat(value)]
//     }
// })

//   return objects
// }

function App() {
  const [users, setUsers] = useState([])
  const [userDetails, setUserDetails] = useState([])
  const [vehicleDetails, setVehicleDetails] = useState([])
  const [vehicleCount, setVehicleCount] = useState([])
  const [relatedPictures, setRelatedPictures] = useState([])
  const [relatedPicturesCount, setRelatedPicturesCount] = useState([])

  const fetchId = (id) => {
    axios.get("https://interviewtst.herokuapp.com/get-selected-user-details/:id )")
    .then(response => {
      console.log( response.data)
      
      const {Related_Pictures, Related_Pictures_Count,User_Details, Vehicles_Count,Vehicles_Details}= response.data
      return {Related_Pictures, Related_Pictures_Count,User_Details, Vehicles_Count,Vehicles_Details}
    }).then(({Related_Pictures, Related_Pictures_Count,User_Details, Vehicles_Count,Vehicles_Details})=> {
      setUserDetails(User_Details)
      setVehicleDetails(Vehicles_Details)
      setVehicleCount(Vehicles_Count)
      setRelatedPictures(Related_Pictures)
      setRelatedPicturesCount(Related_Pictures_Count)
    }
      ).catch(err => {
      console.error(err)
    })
  }


  
  


useEffect(()=> {
  
    
      axios.get("https://interviewtst.herokuapp.com/get-all-users")
        .then(response => {
          console.log(response)
          const {User_Details} = response.data
          console.log(User_Details)
          return User_Details
        }).then(users=> {
          console.log(users)
          return setUsers(users)
        }
          ).catch(err => {
          console.error(err)
        })


     
        
    
},[])


// const elementUser =users.map(user => (
//   <ul key={user.user_id}>
//     <li>{user.firstname}</li>
//     <li>{user.email}</li>
   
//   </ul>
// ))
const elementUserDetails =users.map(user => (
  <ul key={user.user_id} onClick = {()=>fetchId(user.user_id)}>
    <li onClick = {()=>fetchId(user.user_id)}>{user.firstname} {user.lastname}</li>
    <li onClick = {()=>fetchId(user.user_id)}>{user.email}</li>
    <li onClick = {()=>fetchId(user.user_id)}>{user.email}</li>
    <li onClick = {()=>fetchId(user.user_id)}>{user.job_area}</li>
    <li onClick = {()=>fetchId(user.user_id)}>{user.job_title}</li>
    <li onClick = {()=>fetchId(user.user_id)}>{user.phone_no}</li>
  </ul>
))
// const elementVehicleDetails =vehicleDetails.map(user => (
//   <ul key={user.user_id}>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.firstname}</li>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.email}</li>
//   </ul>
// ))

// const elementVehicleCount =vehicleCount.map(user => (
//   <ul key={user.user_id}>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.firstname}</li>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.email}</li>
//   </ul>
// ))

// const elementRelatedPictures =relatedPictures.map(user => (
//   <ul key={user.user_id}>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.firstname}</li>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.email}</li>
//   </ul>
// ))
// const elementRelatedPicturesCount =relatedPicturesCount.map(user => (
//   <ul key={user.user_id}>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.picture_count}</li>
//     <li onClick = {()=>fetchId(user.user_id)}>{user.email}</li>
//   </ul>
// ))






  
  return (
    <div className="App">
        {/* {elementUser}  */}
        {elementUserDetails}
    </div>
  );
}

export default App;
