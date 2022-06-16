import React, { Component } from 'react'
import InputUser from '../commons/InputUser'
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';
import { Link, Navigate } from 'react-router-dom';
import PopUpCos from '../commons/PopUpCos';
import CosmeticHomePage from './CosmeticHomePage';

class LogInCos extends Component {

  constructor(props) {
    super(props)
    
  this.state={

    cosmetologist_user_name:'',
    cosmetologist_user_password:'',
    cosmetologist_id:''
}
  }

handlechange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
    
  })
}

checkLogInCos = (e)=>{
  console.clear();
  e.preventDefault()
  
  const apiUrl = 'http://localhost:58031/api/LogIn/Cos';
  
  const LogincheckCos={
    cosmetologist_user_name:this.state.cosmetologist_user_name,
    cosmetologist_user_password:this.state.cosmetologist_user_password,
  };
  
  fetch(apiUrl , {
    method: 'Post',
    body: JSON.stringify(LogincheckCos),
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
        console.log(result.cosmetologist_id);
        
        localStorage.setItem("cosmetologist_id",result);
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
        <br></br><br></br>
        <h2 style={{color:"black"}}>כניסת קוסמטיקאיות</h2>
        <br></br>

        <InputUser value={this.cosmetologist_user_name} name="cosmetologist_user_name" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e)=>{this.setState({cosmetologist_user_name:e.target.value})}}/>

        <InputUser value={this.cosmetologist_user_password} name="cosmetologist_user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e)=>{this.setState({cosmetologist_user_password:e.target.value})}}/>

        <Link to='/coshomepage'>
        <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="התחבר" onClick={this.checkLogInCos}/>
        </Link>

        <Link to='/forgot'>
        <ButtonLogIn style={{backgroundColor:'#f8fbff',border:'none',color:'black',textDecorationLine: 'underline'}} name="  שכחתי סיסמה"/> 
        </Link>
        <div style={{margin:50}}>
       

        </div>

      </div>
    )
  }
}

export default LogInCos;