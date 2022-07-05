import React from 'react'
import { Link } from 'react-router-dom';
import ButtonLogIn from './ButtonLogIn';


const UserCard = (props) => {
  const {users} = props
  
  const showId =()=>{
    console.log(users.appUser_id);
    localStorage.setItem('user',JSON.stringify(users));

  }

  return (
    <div className="card"  style={{backgroundColor:'#EEE4C4', width:'10rem',height:'20rem',margin:20,float:"right",border: 'black solid 1px', padding:5,borderRadius:10}} >
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div> <h3 className="card-text" style={{color:"#c4a092",fontSize:15,textAlign:'center'}} > {users.first_name}  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_gender}  :מגדר </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > סוג עור: {users.user_skinType}   </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_skinProblem}  :בעיית עור </h3> </div>
     
      <Link to='/addskinplan' >
      <ButtonLogIn  style={{backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name=" יצירת תוכנית טיפוח " onClick={showId}/>
      </Link>

    </div>
    </div>
    
   );
  }
   export default UserCard;