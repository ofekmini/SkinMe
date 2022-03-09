import React from 'react'
import InputUser from '../components/InputUser';
import ButtonLogIn from '../components/ButtonLogIn';
import Logo from '../components/Logo';


export default function SignUp() {
  return (
    <div>
      <Logo/>

      <InputUser type="text" label="שם פרטי " placeholder="שם פרטי " />

      <InputUser type="text" label="שם משפחה   " placeholder="שם משפחה "/>  
      <InputUser type="text" label="מייל " placeholder="מייל  " />


      <InputUser type="text" label="שם משתמש " placeholder="שם משתמש " />

      <InputUser type="password" label="סיסמה  " placeholder="סיסמה "/>
    </div>
  )
}
