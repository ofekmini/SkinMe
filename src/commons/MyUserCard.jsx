import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ButtonLogIn from './ButtonLogIn';


const MyUserCard = (props) => {
 
  const {user} = props

  const showId =()=>{
    console.log(user.prod_id);
    localStorage.setItem('appUser_id',user.appUser_id);
    localStorage.setItem('user_route',user.user_route);

  }

  return (
    <div className="card"  style={{backgroundColor:'#EEE4C4',height:'17rem', width:'40%',  margin: 15, float:"right",border: 'black solid 1px',borderRadius:10}} >
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div> <h3 className="card-text" style={{color:"gray",fontSize:15,textAlign:'center'}} > {user.first_name}  </h3> </div>
      <div> <p className="card-text" style={{color:"black",fontSize:13,textAlign:'center'}} > סוג עור: {user.user_skinType}   </p> </div>
      <div> <p className="card-text" style={{color:"black",fontSize:13,textAlign:'center'}} > בעיית עור: {user.user_skinProblem}   </p> </div>
     
     <Link to='/showplan'>
      <button  style={{backgroundColor:"#c4a092",color:"white",fontSize:14,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:20}} onClick={showId}> צפייה בתוכנית טיפוח</button>
      </Link>
     
    </div>
    </div>
    
   );
  }
   export default MyUserCard;