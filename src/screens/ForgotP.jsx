import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ButtonLogIn from '../commons/ButtonLogIn';
import InputUser from '../commons/InputUser';
import Logo from '../commons/Logo';


export default class ForgotP extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
      email:"",
     
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
    e.preventDefault()
    const apiUrl = `http://localhost:58031/api/mail/forgotpassword?mail=${this.state.email}`;

    

   

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


<InputUser value={this.email} name="email" type="text" label="מייל  " placeholder="מייל  " onChange={(e)=>{this.setState({email:e.target.value})}}/>


<Link to="/LogInUser">
<ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="שלח מייל" onClick={this.sendMail} />
</Link>
      </div>
    )
  }
}
