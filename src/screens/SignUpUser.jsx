import React, { Component } from 'react';
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';



class SignUpUser extends Component {

  

  constructor(props) {
    super(props)
    
    this.state={
      user_firstName:"",
      user_lastName:"", 
      user_gender:"",
      user_userName:"",
      user_password:"",
      user_email:"",
      user_birth:"",
      user_profileImg:"",
      user_processImg:"",
      user_skinType:"",

      //basic skin survey 
      user_skinProblem:"",
      user_cheek:"",
      user_Tzone:"",
      user_sunExposure:"",
      user_stress:"",

      // profesional skin survey
      user_period:"",
      user_dermatology:"",
      user_currentProducts:"",
      user_sensitive:"",
      user_areas:"",


   }
  }
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      user_birth:e,
      
    })
  }


   addUser = (e)=>{
    console.clear();
    e.preventDefault()
    const apiUrl = 'https://localhost:44347/api/LogIn/';

    const user_data={
        user_firstName: this.state.user_firstName,
        user_lastName:this.state.user_lastName,
        user_email:this.state.user_email,
        user_birth:this.state.user_birth,
        user_userName:this.state.user_userName,
        user_password:this.state.user_password,
        user_gender:this.state.user_gender
      
    };
    
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(user_data),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.user_userName);
          console.log(this.state);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }
 
  

  render() {
   
    return (
      <div>

        <Logo/>

        <InputUser value={this.user_firstName} name="user_firstName" type="text" label="שם פרטי " placeholder="שם פרטי " onChange={(e)=>{this.setState({user_firstName:e.target.value})}}/>

        <InputUser value={this.user_lastName} name="user_lastName" type="text" label="שם משפחה   " placeholder="שם משפחה " onChange={(e)=>{this.setState({user_lastName:e.target.value})}}/>  

        <InputUser value={this.user_email} name="user_email" type="text" label="מייל " placeholder="מייל"  onChange={(e)=>{this.setState({user_email:e.target.value})}}/>

        <InputUser value={this.user_birth} name="user_birth" type="date" label="תאריך לידה " placeholder="תאריך לידה"  onChange={(e)=>{this.setState({user_birth:e.target.value})}}/>

        <InputUser value="F" name="user_gender" type="radio" label="אישה " onChange={(e)=>{this.setState({user_gender:e.target.value})}}/>

        <InputUser value="M" name="user_gender" type="radio" label="גבר "  onChange={(e)=>{this.setState({user_gender:e.target.value})}}/>
       
        <InputUser value={this.user_userName} name="user_userName" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e)=>{this.setState({user_userName:e.target.value})}}/>

        <InputUser value={this.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>

        <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="סיום הרשמה" onClick={this.addUser}/>

      </div>
     
    )
  }
}

export default SignUpUser;
