import React from 'react'

import InputUser from '../components/InputUser';
import ButtonLogIn from '../components/ButtonLogIn';
import Logo from '../components/Logo';


 function Signin() {

  const SignInButton=()=>{
    alert('sign in ');
  }
  const ForgotPassword=()=>{
    alert('forgot password ');
  }


  return (
    <div >
     <Logo/>

      <h1 style={{color:"black", fontSize:30}}>,שלום לך </h1>

     <div>
     
     <InputUser type="text" label="שם משתמש " placeholder="שם משתמש " />

     <InputUser type="password" label="סיסמה  " placeholder="סיסמה "/>

     <ButtonLogIn style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} button="התחבר" click={SignInButton}/>
     <ButtonLogIn style={{margin:30,backgroundColor:"#f8fbff",border:"none",fontSize:15,width:'80%',height:40,textDecorationLine: 'underline'}} button="? שכחת סיסמה" click={ForgotPassword}/>
     <ButtonLogIn style={{margin:10,backgroundColor:"blue",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} button="חיבור עם חשבון פייסבוק" click={SignInButton}/>
     <ButtonLogIn style={{margin:10,backgroundColor:"red",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} button="חיבור עם חשבון גוגל" click={SignInButton}/>
     <ButtonLogIn style={{margin:30,backgroundColor:"#f8fbff",border:"none",fontSize:15,width:'80%',height:40,textDecorationLine: 'underline'}} button=" הרשמה לאפליקציה " click={ForgotPassword}/>

     </div> 

    </div>
  )
}
export default Signin;
