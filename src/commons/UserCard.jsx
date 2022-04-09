import React from 'react'
import CosmeticHomePage from '../screens/CosmeticHomePage';

const UserCard = (props) => {
  const {users} = props

  return (
    <div className="card"  style={{ width:'8rem',margin:20,float:"left"}} >
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div><h5 className="card-title" style={{color:"#c4a092",}}> פרטי לקוח</h5></div>
      <div><h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}}> {users.first_name}</h3></div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {users.email}  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >  {users.user_gender}  :מגדר </h3> </div>
      

    </div>
    </div>
    
   );
  }
   export default UserCard;