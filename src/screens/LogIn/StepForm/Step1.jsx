import React, { Component,useState } from 'react'
import InputUser from '../../commons/InputUser';

import FacebookLogIn from '../LogIn/FacebookLogIn';
import LoginWGoggle from '../LogIn/LoginWGoggle';
import validator from 'validator'





function Step1(props) {
  const [errorMessageMail, setErrorMessageMail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  if (props.currentStep !== 1) {
    return null
  } 

  const validatePassword = (value) => {
    
    if (validator.isStrongPassword(value,{
      minLength: 6, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, 
    })) {
      setErrorMessagePassword('Strong Password')
    } else {
      setErrorMessagePassword('Password not strong enough, must contain 8 caracthers with at least one upper case and one number')
    }
  }


  return(
    
    <div className="form-group">
     


<InputUser value={props.first_name} name="first_name" type="text" label="שם פרטי   " placeholder="שם פרטי "  onChange={props.handleChange}/>  

<InputUser value={props.last_name} name="last_name" type="text" label="שם משפחה   " placeholder="שם משפחה "  onChange={props.handleChange}/>  


 
<InputUser value={props.email} name="email" type="text" label="מייל " placeholder="מייל"  onChange={props.handleChange}/>

<InputUser value={props.user_birth} name="user_birth" type="date" label="תאריך לידה " placeholder="תאריך לידה" onChange={props.handleChange}/>

<label className='label'>

  
 <input type="radio" name="user_gender" value="M"   onChange={props.handleChange}/>
 <img alt="wrinkles" height="100" width="100" src={require("../../assets/images/boy.png")}/>

</label>

 

 <label className='label'>

  
<input type="radio" name="user_gender" value="F"   onChange={props.handleChange}/>
<img alt="wrinkles" height="100" width="100" src={require("../../assets/images/girl.png")}/>

</label>

 
<InputUser value={props.username} name="username" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={props.handleChange}/>

<InputUser value={props.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={props.handleChange }/><br/><br/>
<span style={{
          fontWeight: 'bold',
          color: 'red',
          fontSize:12
        }}>{errorMessagePassword}</span>
        <br/>

<hr/> או <hr/> <br/>
        
<FacebookLogIn handleChange={props.handleChangeByFacebookOrGoogle} /> <br/>
  
<LoginWGoggle handleChange={props.handleChangeByFacebookOrGoogle}/>
    </div>
    
  );
}

export default Step1;