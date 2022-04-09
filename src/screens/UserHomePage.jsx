import React, { Component } from 'react'

class UserHomePage extends Component {
  
  render() {
    return (
      <div>
        
     <h2 style={{fontFamily:'cursive',color:'#c4a092',paddingTop:50}} >שיגרת הטיפוח שלי</h2>
     <img style={{paddingLeft:200}} alt="day" height="100" width="100" src={require("../assets/images/day.png")}/>


     <img style={{paddingLeft:200}} alt="moon" height="30" width="30" src={require("../assets/images/moon.png")}/>
        
        
        </div>
    )
  }
}


export default UserHomePage;
