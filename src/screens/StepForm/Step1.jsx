import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';

import FacebookLogin from 'react-facebook-login';
import FacebookLogIn from '../FacebookLogIn';
import '../Skinme.css'
import LoginWGoggle from '../LoginWGoggle';



function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 


  return(
    
    <div className="form-group">
     
<input type="file" name="picture"  value={props.picture}  onChange={props.handleChange} />   

<InputUser value={props.first_name} name="first_name" type="text" label="שם פרטי   " placeholder="שם פרטי "  onChange={props.handleChange}/>  

<InputUser value={props.last_name} name="last_name" type="text" label="שם משפחה   " placeholder="שם משפחה "  onChange={props.handleChange}/>  

 
<InputUser value={props.email} name="email" type="text" label="מייל " placeholder="מייל"  onChange={props.handleChange}/>

<InputUser value={props.user_birth} name="user_birth" type="date" label="תאריך לידה " placeholder="תאריך לידה" onChange={props.handleChange}/>


 <input style={{position:'absolute', opacity: 0,width: 0, height: 0}}type="radio" name="user_gender" id="radio1" value="M"  onChange={props.handleChange} />
 <label htmlFor="radio1"><img  height="100" alt='boy' width="100" src="https://proj.ruppin.ac.il/bgroup90/test2/tar1/build/static/media/girl.7446e3274fa54b7cd284.png" /></label>

 <input style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_gender" id="radio2" value="F"  onChange={props.handleChange} />
 <label htmlFor="radio2"><img  height="100" alt='girl' width="100"src="https://proj.ruppin.ac.il/bgroup90/test2/tar1/build/static/media/girl.7446e3274fa54b7cd284.png" /></label>

<InputUser value={props.username} name="username" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={props.handleChange}/>

<InputUser value={props.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={props.handleChange}/><br/><br/>

<FacebookLogIn /> <br/>
  
<LoginWGoggle/>
    </div>
    
  );
}

export default Step1;