import React, { Component } from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import InputUser from '../commons/InputUser';
import Logo from '../commons/Logo';


export default class ForgotP extends Component {


  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      
     
      
    })
  }

  sendMail= (e)=>{
    e.preventDefault();
  };




  render() {
    return (


      <div>

<Logo/>

<h2 style={{color:"black"}}>שכחתי סיסמה </h2>


<InputUser value={this.email} name="email" type="text" label="מייל  " placeholder="מייל  " onChange={(e)=>{this.setState({email:e.target.value})}}/>



<ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="שלח מייל   " onClick={this.sendMail}/>

      </div>
    )
  }
}
