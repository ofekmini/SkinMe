import React, { Component } from 'react'
import InputUser from '../../commons/InputUser'
import ButtonLogIn from '../../commons/ButtonLogIn';
import Logo from '../../commons/Logo';
import { Link, useNavigate } from 'react-router-dom';
import PopUpCos from '../../commons/PopUpCos';
import Menu from '../Menu';
import FacebookLogIn from './FacebookLogIn';
import LoginWGoggle from './LoginWGoggle';
import { useState } from 'react';




const LogInUser = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [user_password, SetUserPassword] = useState('')
  const [appUser_id, setAppUserId] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [user_skinType, setUserSkinType] = useState('')
  let navigate = useNavigate()

  const handleChangeByFacebookOrGoogle = (email, username) => {
    setUsername(username)
    setEmail(email)
    checkSocialMedia()

  }



  const handlechange = (e) => {
    switch(e.target.name){
      case 'username':
        setUsername(e.target.value)
        break;
      case 'user_password':
        SetUserPassword(e.target.value)  
    }
  }

  const checkLogIn = (e) => {
    console.clear();


    const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/LogIn/User';

    const Logincheck = {
      username: username,
      user_password: user_password,

    };

    fetch(apiUrl, {
      method: 'POST',
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
          console.log(result);
          console.log(result.user_skinType)
          if (result === "username or password were not found") {
            setErrorMessage(result)

          }
          else {

            setErrorMessage('')
            localStorage.setItem("appUser_id", result.appUser_id);
            localStorage.setItem("user_skinType", result.user_skinType);
            localStorage.setItem("user_route", result.user_route);
            localStorage.setItem('cosmetologist_id', result.cosmetologist_id);
            localStorage.setItem("type", 0);
            navigate('/userhomepage')
          }

        },
        (error) => {
          console.log("err post=", error);


        });

    console.log('END');
  }

  const checkSocialMedia = (e) => {
    console.clear();


    const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/LogIn/User/SocialMedia';

    const Logincheck = {
      username: username,
      email: email,

    };

    fetch(apiUrl, {
      method: 'POST',
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
          console.log(result);
          console.log(result.user_skinType)
          if (result === "username or password were not found") {
            setErrorMessage(result)
          }
          else {

            setErrorMessage('')
            localStorage.setItem("appUser_id", result.appUser_id);
            localStorage.setItem("user_skinType", result.user_skinType);
            localStorage.setItem("type", 0);
            navigate('/userhomepage')
          }


        },
        (error) => {
          console.log("err post=", error);


        });

    console.log('END');
  }
    return (

      <div>
        <Logo />

        <br></br><br></br>
        <h2 style={{ color: "black" }}>כניסת משתמשים</h2>
        <br></br>
        <InputUser value={username} name="username" type="text" label="שם משתמש" placeholder="שם משתמש" onChange={(e) => { setUsername(e.target.value) } } />

        <InputUser value={user_password} name="user_password" type="password" label="סיסמה" placeholder="סיסמה" onChange={(e) => { SetUserPassword(e.target.value) }} />


        <button
          style={{ margin: 30, backgroundColor: "black", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={checkLogIn} >התחבר

        </button>

        {errorMessage &&
          <h3 style={{ color: 'red', fontSize: 14, marginTop: 0 }}> {errorMessage} </h3>}


        <Link to="/forgot">
          <button style={{ backgroundColor: '#f8fbff', border: 'none', color: 'black', textDecorationLine: 'underline' }}  > שכחתי סיסמה</button>
        </Link>
        <div style={{ margin: 50 }}>
          <Link to="/chooseuser">
            <button style={{ fontSize: 20, backgroundColor: '#f8fbff', border: 'none', color: '#bc8f8f', textDecorationLine: 'underline' }}  > הרשמה לאפליקציה</button><br /><br />
          </Link>

          <div style={{ marginTop: 40 }}>
            <Link to='/'>
              <h4 style={{ color: '#bc8f8f' }}>חזרה למסך הכניסה</h4>
            </Link>
          </div>



        </div>
        <hr /> או <hr /> <br />

        <FacebookLogIn handleChange={handleChangeByFacebookOrGoogle} /> <br />

        <LoginWGoggle handleChange={handleChangeByFacebookOrGoogle} />

      </div>
    )
  }


export default LogInUser;
