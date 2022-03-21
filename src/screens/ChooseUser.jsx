import React from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';


export default function ChooseUser() {

  return (

    <div>
      <Logo/>
      <h3 style={{color:'#c4a092',textDecorationLine:'underline'}}>  אני </h3>
      <ButtonLogIn/>
      <ButtonLogIn/>
      
    </div>
  )
}
