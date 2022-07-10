import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';

import { Link } from 'react-router-dom';

import PopUpUser from '../../commons/PopUpUser';
import { useState } from 'react';

const SettingsUser = (props) => {
  const [userPassword, setUserPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [appUserId, setAppUserId] = useState(localStorage.getItem('appUser_id'))
  const [showPopup, setShowPopup] = useState(false)


  const togglePopup = () => {
    setShowPopup(!showPopup)
  }


  const UpdatePassword = () => {
    console.clear();
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/login/UpdatePassword?id=${appUserId}`;

    togglePopup();

    const pass = {

      user_password: userPassword
    };

    fetch(apiUrl, {
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
          console.log('result.appUser_id=', result.appUser_id);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  const UpdateMail = () => {
    console.clear();
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/login/UpdateUserEmail?id=${appUserId}`;
    togglePopup();

    const mail1 = {

      email: email
    };

    fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(mail1),
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
          console.log('result.appUser_id=', result.appUser_id);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  const UpdateUsername = () => {
    console.clear();
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/login/UpdateUserUsername?id=${appUserId}`;
    togglePopup();

    const username1 = {

      username: username
    };

    fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(username1),
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
          console.log('result.appUser_id=', result.appUser_id);

        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  return (
    <div >
      <Link to='/userhomepage'>
        <img style={{ position: 'absolute', left: 5, top: 0 }} alt="wrinkles" height="100" width="100" src={require("../../assets/images/home2.png")} />
      </Link>
      <h4 style={{ marginTop: 35 }}> הגדרות </h4>  <hr />

      <div style={{ margin: 60, border: '2px solid black', borderRadius: 30 }}>

        <h5 style={{ marginTop: 10 }}> שינוי סיסמה  </h5>

        <InputUser value={userPassword} name="user_password" type="text" label=" הזן סיסמה חדשה  " placeholder="סיסמה חדשה    " onChange={(e) => { setUserPassword(e.target.value) }} />

        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={UpdatePassword}>שמור</button>
        {showPopup ?
          <PopUpUser
            header='  שינוי נקלט'
            text='השינוי נקלט בהצלחה'
            closePopup={togglePopup.bind(this)}
          />
          : null
        }
      </div>

      <div style={{ margin: 60, border: '2px solid black', borderRadius: 30 }}>

        <h5 style={{ marginTop: 10 }}> שינוי מייל  </h5>

        <InputUser value={email} name="email" type="text" label="הזן מייל חדש  " placeholder=" מייל חדש    " onChange={(e) => { setEmail(e.target.value) }} />

        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={UpdateMail}>שמור</button>
        {showPopup ?
          <PopUpUser
            header='  שינוי נקלט'
            text='השינוי נקלט בהצלחה'
            closePopup={togglePopup.bind(this)}
          />
          : null
        }
      </div>

      <div style={{ margin: 60, border: '2px solid black', borderRadius: 30 }}>

        <h5 style={{ marginTop: 10 }}> שינוי שם משתמש  </h5>

        <InputUser value={username} name="username" type="text" label="הזן שם משתמש חדש   " placeholder=" שם משתמש     " onChange={(e) => { setUsername(e.target.value) }} />

        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={UpdateUsername}>שמור</button>
        {showPopup ?
          <PopUpUser
            header='  שינוי נקלט'
            text='השינוי נקלט בהצלחה'
            closePopup={togglePopup.bind(this)}
          />
          : null
        }
      </div>

    </div>
  )
}


export default SettingsUser;
