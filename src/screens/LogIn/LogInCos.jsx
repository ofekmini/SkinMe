import React, { Component } from 'react'
import InputUser from '../../commons/InputUser'

import Logo from '../../commons/Logo';
import { Link, Navigate, Route, Router } from 'react-router-dom';




class LogInCos extends Component {

  constructor(props) {
    super(props)

    this.state = {

      cosmetologist_user_name: '',
      cosmetologist_user_password: '',
      cosmetologist_id: '',
      errorMessage: "",

    }
  }


  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,

    })
  }


  checkLogInCos = (e) => {
    console.clear();
    // e.preventDefault()

    const apiUrl = 'http://localhost:58031/api/LogIn/Cos';

    const LogincheckCos = {
      cosmetologist_user_name: this.state.cosmetologist_user_name,
      cosmetologist_user_password: this.state.cosmetologist_user_password,
    };

    fetch(apiUrl, {
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
          console.log("fetch POST=  ", result);
          console.log(result);
          console.log(result.cosmetologist_id);
          if (result === "שם משתמש או סיסמה אינם נכונים") {
            this.setState({ errorMessage: result });
          }
          else if (result === "משתמש טרם אושר") {
            this.setState({ errorMessage: result });
          }
          else {
            this.setState({ errorMessage: "" });
            
            localStorage.setItem("cosmetologist_id", result);
            localStorage.setItem("type", 1);
            window.location.href = '/coshomepage'
          }

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

        <Logo />
        <br></br><br></br>
        <h2 style={{ color: "black" }}>כניסת קוסמטיקאיות</h2>
        <br></br>

        <InputUser value={this.cosmetologist_user_name} name="cosmetologist_user_name" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e) => { this.setState({ cosmetologist_user_name: e.target.value }) }} />

        <InputUser value={this.cosmetologist_user_password} name="cosmetologist_user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e) => { this.setState({ cosmetologist_user_password: e.target.value }) }} />

        <button style={{ margin: 30, backgroundColor: "black", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={this.checkLogInCos} >התחברות</button>

        {this.state.errorMessage &&
          <h3 style={{ color: 'red', fontSize: 14, marginTop: 0 }}> {this.state.errorMessage} </h3>}

        <Link to='/forgotcospass'>
          <button style={{ backgroundColor: '#f8fbff', border: 'none', color: 'black', textDecorationLine: 'underline' }}  >שכחתי סיסמה </button>
        </Link>

        <div style={{ marginTop: 100 }}>
          <Link to='/'>
            <h4 style={{ color: '#bc8f8f' }}>חזרה למסך הכניסה</h4>
          </Link>
        </div>
        <div style={{ margin: 50 }}>


        </div>

      </div>
    )
  }
}

export default LogInCos;