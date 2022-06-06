import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';
import FacebookLogin from 'react-facebook-login';
import FacebookLogIn from '../FacebookLogIn';
import LoginWGoggle from '../LoginWGoggle';





function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 


  return(
    
    <div className="form-group">
     
<input type="file"  name="picture"  value={props.picture}  onChange={props.handleChange} />   

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

<InputUser value={props.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={props.handleChange}/><br/><br/>

<FacebookLogIn /> <br/>
  
<LoginWGoggle/>
    </div>
    
  );
}

export default Step1;