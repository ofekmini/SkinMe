import React from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';
import { Link } from 'react-router-dom';


export default function ChooseUser() {
  
  return (

    <div>
      <Logo/><br/>
      <h2 style={{color:'black'}}>הרשמה</h2>
      <h3 style={{color:'#c4a092'}}>  בחר סוג משתמש  </h3>
      <Link to="/signupuser">
      <button style={{backgroundColor:"black",color:"white",fontSize:15,width:'60%',height:40,borderColor:"#e8e8e8" ,margin:20, borderWidth:1,borderRadius:50}}>משתמש רגיל</button>
      </Link>

      <Link to="/signupcos">
      <button style={{backgroundColor:"black",color:"white",fontSize:15,width:'60%',height:40,borderColor:"#e8e8e8" ,margin:20, borderWidth:1,borderRadius:50}}  >קוסמטיקאית</button>
      </Link>
    </div>
  )
}
