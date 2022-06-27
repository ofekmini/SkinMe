import React from 'react'
import { Link } from 'react-router-dom';
import ButtonLogIn from './ButtonLogIn';


const UserCard = (props) => {
  const {users} = props
  
  {/*
  setID = (e) => {
   localStorage.setItem("appUser_id", users.appUser_id);
  } */}


  return (
    <div className="card"  style={{margin:20, alignItems:'center', paddingBottom:40}}>
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div> <h3 className="card-text" style={{color:"#c4a092",fontSize:15,textAlign:'center'}} > {users.first_name}  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_gender}  :מגדר </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_skinType}  :סוג עור </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_skinProblem}  :בעיית עור </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.appUser_id}  :מספר משתמש </h3> </div>
     
      <Link to='/addskinplan' >
      <ButtonLogIn  style={{backgroundColor:"#c4a092",color:"white",fontSize:15,width:'40%',height:30,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name=" יצירת תוכנית טיפוח "/>
      </Link>

    </div>
    </div>
    
   );
  }
   export default UserCard;