import React, { Component } from 'react'
import InputUser from '../commons/InputUser'
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';
import { Link } from 'react-router-dom';
import PopUpCos from '../commons/PopUpCos';


class LogInUser extends Component {

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


checkLogIn = (e)=>{
  console.clear();
  e.preventDefault()
  
  const apiUrl = 'https://localhost:44326/api/';
  

  const Logincheck={
      
    userName:this.state.username,
    password:this.state.user_password,
 
    
  };
  
  fetch(apiUrl +'LogIn', {
    method: 'Post',
    body: JSON.stringify(Logincheck),
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
        console.log(result.username);
        console.log(this.state);
      },
      (error) => {
        console.log("err post=", error);
      
        
      });

  console.log('END');
}


/**checkLogIn = (e)=>{
  console.clear();
  e.preventDefault()
  const apiUrl = `https://localhost:44326/api/LogIn?userName=${this.state.username}&password=${this.state.user_password}`;
  
 
  
  fetch(apiUrl, {
    method: 'Post',
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
      console.log("fetch btnFetchCheckLogin= ", result);
      console.log('result.username=', result.username);
    },
    (error) => {
      console.log("err post=", error);
    });

console.log('END');
}**/

 


  render() {
    return (
      <div>
        
        <Logo/>

        <h2 style={{color:"black"}}>שלום לך</h2>

        <InputUser value={this.username} name="username" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e)=>{this.setState({username:e.target.value})}}/>

        <InputUser value={this.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>
        <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="התחבר" onClick={this.checkLogIn}/>
      
        <Link to="/forgot">
        <ButtonLogIn style={{backgroundColor:'#f8fbff',border:'none',color:'black',textDecorationLine: 'underline'}} name="  שכחתי סיסמה"/> 
        </Link>
        <div style={{margin:50}}>
       <Link to="/chooseuser">
        <ButtonLogIn style={{fontSize:20,backgroundColor:'#f8fbff',border:'none',color:'#bc8f8f',textDecorationLine: 'underline'}} name=" הרשמה לאפליקציה"/> 
        </Link>
        </div>


      </div>
    )
  }
}

export default LogInUser;
