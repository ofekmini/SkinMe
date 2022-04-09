import React, { Component } from 'react'
import InputUser from '../commons/InputUser'
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';
import { Link } from 'react-router-dom';
import PopUpCos from '../commons/PopUpCos';


class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    
  this.state={

    username:'',
    user_password:'',

    
}
  }

handlechange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
    
   
    
  })
}


 ChangePassword = (e) => {
  console.clear();
  const apiUrl = `https://localhost:44326/api/login/ForgotPassword?username=${this.state.username}`;

  const pass = { 
    user_password:this.state.user_password
  };

  fetch(apiUrl , {
    method: 'PUT',
    body: JSON.stringify(pass),
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
        console.log("fetch btnFetchUpdatePassword= ", result);
        console.log('result.username=', result.username);
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

        <h2 style={{color:"black"}}>שלום לך</h2>

        <InputUser value={this.username} name="username" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e)=>{this.setState({username:e.target.value})}}/>

        <InputUser value={this.user_password} name="user_password" type="password" label=" סיסמה חדשה   " placeholder="סיסמה חדשה " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>
        
        <Link to='/'>
        <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="שמור סיסמה חדשה" onClick={this.ChangePassword}/>
        </Link>


      </div>
    )
  }
}

export default ForgotPassword;
