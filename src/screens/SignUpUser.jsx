import React, { Component } from 'react';
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


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
      qb1:"",
      qb2:"",
      qb3:"",
      qb4:"",
      qb5:"",
      qb6:"",
      qb7:"",
      qb8:"",
      qb9:"",
      qb10:"",
      qp1:"",
      qp2:"",
      qp3:"",
      qp4:"",
      qp5:"",
      qp6:"",
      qp7:"",
      qp8:"",
      qp9:"",
      qp10:"",


     

   }
  }
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


   addUser = (e)=>{
    console.clear();
    e.preventDefault()
    const apiUrl = 'https://localhost:44347/api/SignInUser/';

    const user_data={
        user_firstName: this.state.user_firstName,
        user_lastName:this.state.user_lastName,
        user_email:this.state.user_email,
        user_birth:this.state.user_birth,
        user_userName:this.state.user_userName,
        user_password:this.state.user_password
      
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

  selectedDate=(e)=>{

    this.setState({user_birth:e})
  }


  render() {
   
    return (
      <div>

        <Logo/>

        <InputUser value={this.user_firstName} name="user_firstName" type="text" label="שם פרטי " placeholder="שם פרטי " onChange={(e)=>{this.setState({user_firstName:e.target.value})}}/>

        <InputUser value={this.user_lastName} name="user_lastName" type="text" label="שם משפחה   " placeholder="שם משפחה " onChange={(e)=>{this.setState({user_lastName:e.target.value})}}/>  

        <InputUser value={this.user_email} name="user_email" type="text" label="מייל " placeholder="מייל"  onChange={(e)=>{this.setState({user_email:e.target.value})}}/>
        
        <h3 style={{color:"black",margin:10,paddingRight:30,fontSize:15,textAlign:"right"}}>תאריך לידה </h3>
        <DatePicker style={{borderRadius:50}} 
        selected={this.state.user_birth} 
        dateFormat='dd/MM/yyyy'
        onChange={this.selectedDate}
        showYearDropdown
        scrollableMonthYearDropdown
         />
        



        <InputUser value={this.user_userName} name="user_userName" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e)=>{this.setState({user_userName:e.target.value})}}/>

        <InputUser value={this.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>

        <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="סיום הרשמה" onClick={this.addUser}/>

      </div>
     
    )
  }
}

export default SignUpUser;
