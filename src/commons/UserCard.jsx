import React from 'react'
import CosmeticHomePage from '../screens/CosmeticHomePage';

const UserCard = (props) => {
  const {users} = props

  return (
    <div className="card"  style={{ width:'18rem',margin:50,float:"left",border: 'white dotted 2px'}} >
    <img className="card-img-top" src="https://w1.pngwing.com/pngs/950/218/png-transparent-flower-plant-cosmetics-cream-face-cartoon-skin-care-lipstick-cosmetology.png" alt="display image" width="200" height="200"  ></img>   
    <div className="card-body">
      <div><h4 className="card-title" style={{color:"#B5651D",}}> {users.user_id}</h4></div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {users.first_name} </h3> </div>
      <div><h4 className="card-title" style={{color:"#B5651D",}}> שם משתמש</h4></div>
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {users.last_name} </p> </div>
      <div><h4 className="card-title" style={{color:"#B5651D",}}> פרטי משתמש</h4></div>
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {users.user_age} </p> </div>
     
    </div>
    </div>
    
   );
  }
   export default UserCard;