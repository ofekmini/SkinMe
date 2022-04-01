import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';

import FacebookLogin from 'react-facebook-login';
import FacebookLogIn from '../FacebookLogIn';
import '../Skinme.css'







function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
     
       
<InputUser value={props.user_firstName} name="user_firstName" type="text" label="שם פרטי   " placeholder="שם פרטי "  onChange={props.handleChange}/>  

<InputUser value={props.user_lastName} name="user_lastName" type="text" label="שם משפחה   " placeholder="שם משפחה "  onChange={props.handleChange}/>  

 
<InputUser value={props.user_email} name="user_email" type="text" label="מייל " placeholder="מייל"  onChange={props.handleChange}/>

<InputUser value={props.user_birth} name="user_birth" type="date" label="תאריך לידה " placeholder="תאריך לידה" onChange={props.handleChange}/>


 <InputUser style={{position:'absolute', opacity: 0,width: 0, height: 0}}type="radio" name="user_gender" id="radio1" value="M"  onChange={props.handleChange} />
 <label for="radio1"><img  height="100" width="100"src="https://proj.ruppin.ac.il/bgroup90/test2/tar1/build/static/media/boy.51dae98a48880cb086a6.png" /></label>

 <InputUser style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_gender" id="radio2" value="F"  onChange={props.handleChange} />
 <label for="radio2"><img  height="100" width="100"src="https://proj.ruppin.ac.il/bgroup90/test2/tar1/build/static/media/girl.7446e3274fa54b7cd284.png" /></label>

<InputUser value={props.username} name="username" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={props.handleChange}/>

<InputUser value={props.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={props.handleChange}/><br/><br/>

<FacebookLogin buttonStyle={{padding:"6px"}}  
                             appId="229777149335447"  
                             autoLoad={true}  
                             fields="name,email,picture"  
                             callback={props.signup}
                             icon="fa-facebook"/> 


    </div>
  );
}

export default Step1;