import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import InputUser from '../../commons/InputUser';
import Logo from '../../commons/Logo';


export default class ForgotCosPass extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
      email:"",

      errorMessage:"",
     
    }
  }


  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
 
    })
    console.log(e.target.value)
  }

  sendMail = (e)=> {
    console.clear();
  //  e.preventDefault()
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/mail/forgotcospassword?mail=${this.state.email}`;

    
    fetch(apiUrl, {
      method: 'PUT',
     // body: JSON.stringify(user_coschoice),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);

        if(res.status!=200)
        {
           this.setState({errorMessage: "Email not found "});
            
        }
        else  
        {
          this.setState({errorMessage: ""});
          window.location.href = '/LogInCos'
         
        }
        
        
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch PUT= ", result);
          console.log(result.email);
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

<h2 style={{color:"black"}}>שכחתי סיסמה </h2>


<InputUser value={this.email} name="email" type="text" label="כתובת מייל  " placeholder="הזן כתובת מייל  " onChange={(e)=>{this.setState({email:e.target.value})}}/>



<button  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={this.sendMail}>שלח מייל לאיפוס סיסמה</button>
{ this.state.errorMessage &&
            <h3 style={{color:'red',fontSize:14,marginTop:0}}> { this.state.errorMessage } </h3> }

              
        <div style={{marginTop:40}}>
          <Link to='/'>
            <h4>חזרה למסך הכניסה</h4>
          </Link>
        </div>

      </div>
    )
  }
}
