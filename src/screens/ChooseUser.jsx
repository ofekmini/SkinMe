import React from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';
import { Link } from 'react-router-dom';


export default function ChooseUser() {
  
  return (

    <div>
      <Logo/><br/>
      <h2 style={{color:'black'}}>שלום</h2>
      <h3 style={{color:'#c4a092'}}>  האם את/ה  </h3>
      <Link to="/signupuser">
      <ButtonLogIn style={{margin:40,backgroundColor:"black",color:"white",fontSize:20,width:'80%',height:50,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="משתמש" />
      </Link>

      <Link to="/signupcos">
      <ButtonLogIn style={{margin:40,backgroundColor:"black",color:"white",fontSize:20,width:'80%',height:50,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name=" קוסמטיקאית" />
      </Link>
    </div>
  )
}
