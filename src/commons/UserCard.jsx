import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonLogIn from './ButtonLogIn';


const UserCard = (props) => {
  const navigate = useNavigate()
  const {user} = props
  
  const showId =()=>{
    localStorage.setItem('user',JSON.stringify(user));
    navigate('/addskinplan')
  }

  return (
    <div className="card"  style={{backgroundColor:'#EEE4C4', width:'10rem',height:'20rem',margin:10,float:"right",border: 'black solid 1px',borderRadius:10,marginRight:20}} >
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div> <h3 className="card-text" style={{color:"#c4a092",fontSize:15,textAlign:'center'}} > {user.first_name}  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {user.user_gender}  :מגדר </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > סוג עור: {user.user_skinType}   </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > בעיית עור: {user.user_skinProblem}   </h3> </div>
     
      <button  style={{backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:50,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={showId}> יצירת תוכנית טיפוח</button>
      

    </div>
    </div>
    
   );
  }
   export default UserCard;