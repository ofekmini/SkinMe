import React, { Component } from 'react'
import { useState } from 'react';
import InputUser from '../../commons/InputUser';

import Logo from '../../commons/Logo';
import PopUpCos from '../../commons/PopUpCos';


let local = false;
//const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/test2/tar1/api/';
const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/LogIn/registerCos';
//if (local) {
// apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/LogIn/register';
//}

const SignUpCos = (props) => {
  const [cosmetologistFirstName, setCosmetologistFirstName] = useState('')
  const [cosmetologistLastName, setCosmetologistLastName] = useState('')
  const [cosmetologistUsername, setCosmetologistUsername] = useState('')
  const [cosmetologistUserPassword, setCosmetologistUserPassword] = useState('')
  const [cosmetologistEmail, setCosmetologistEmail] = useState('')
  const [cosmetologistgGender, setCosmetologistgGender] = useState('')
  const [cosmeticBusinessName, setCosmeticBusinessName] = useState('')
  const [cosmeticAddress, setCosmeticAddress] = useState('')
  const [cosmeticCity, setCosmeticCity] = useState('')
  const [cosmeticLicenseNum, setCosmeticLicenseNum] = useState('')
  const [cosmeticStatus, setCosmeticStatus] = useState('Pending')
  const [cosmetologistPhoneNumber, setCosmetologistPhoneNumber] = useState('')
  const [cosmetologistSumRate, setCosmetologistSumRate] = useState(0)
  const [cosmetologistNumOfRates, setCosmetologistNumOfRates] = useState(0)
  const [cosmetologistRate, setCosmetologistRate] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  
  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const handlechange = (e) => {
    switch (e.target.name) {
      case 'cosmetologist_first_name':
        setCosmetologistFirstName(e.target.value)
        break
      case 'cosmetologist_last_name':
        setCosmetologistLastName(e.target.value)
        break
      case 'cosmetologist_user_name':
        setCosmetologistUsername(e.target.value)
        break
      case 'cosmetologist_user_password':
        setCosmetologistUserPassword(e.target.value)
        break
      case 'cosmetologist_email':
        setCosmetologistEmail(e.target.value)
        break
      case 'cosmetologist_gender':
        setCosmetologistgGender(e.target.value)
        break
      case 'cosmetic_businessName':
        setCosmeticBusinessName(e.target.value)
        break
      case 'cosmetic_address':
        setCosmeticAddress(e.target.value)
        break
      case 'cosmetic_city':
        setCosmeticCity(e.target.value)
        break
      case 'cosmetic_license_num':
        setCosmeticLicenseNum(e.target.value)
        break
      case 'cosmetic_status':
        setCosmeticStatus(e.target.value)
        break
      case 'cosmetologist_phoneNumber':
        setCosmetologistPhoneNumber(e.target.value)
        break
      case 'cosmetologist_sumRate':
        setCosmetologistSumRate(e.target.value)
        break
      case 'cosmetologist_numOfRates':
        setCosmetologistNumOfRates(e.target.value)
        break
      case 'cosmetologist_rate':
        setCosmetologistRate(e.target.value)
        break
      case 'showPopup':
        setShowPopup(e.target.value)
        break

    }
  }

  const addCos = (e) => {
    console.clear();

    debugger

    togglePopup();

    const cos_data = {
      cosmetologist_first_name: cosmetologistFirstName,
      cosmetologist_last_name: cosmetologistLastName,
      cosmetologist_user_name: cosmetologistUsername,
      cosmetologist_user_password: cosmetologistUserPassword,
      cosmetologist_gender: cosmetologistgGender,
      cosmetologist_email: cosmetologistEmail,
      cosmetic_businessName: cosmeticBusinessName,
      cosmetic_address: cosmeticAddress,
      cosmetic_city: cosmeticCity,
      cosmetic_license_num: cosmeticLicenseNum,
      cosmetologist_phoneNumber: cosmetologistPhoneNumber,
      cosmetic_status: cosmeticStatus,

      cosmetologist_rate: cosmetologistRate,
      cosmetologist_sumRate: cosmetologistSumRate,
      cosmetologist_numOfRates: cosmetologistNumOfRates



    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(cos_data),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        debugger
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          debugger
          console.log("fetch POST= ", result);
          console.log(result.cosmetologist_user_name);
          localStorage.setItem("type", 1);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

    return (

      <div>

        <Logo />

        <InputUser value={cosmetologistFirstName} name="cosmetologist_first_name" type="text" label="שם פרטי " placeholder="שם פרטי " onChange={(e) => { setCosmetologistFirstName(e.target.value)}} />


        <InputUser value={cosmetologistLastName} name="cosmetologist_last_name" type="text" label="שם משפחה   " placeholder="שם משפחה " onChange={(e) => { setCosmetologistLastName(e.target.value) }} />

        <InputUser value={cosmetologistEmail} name="cosmetologist_email" type="text" label="מייל " placeholder="מייל" onChange={(e) => { setCosmetologistEmail(e.target.value) }} />


        <label className='label' >
          <input type="radio" name="cosmetologist_gender" value="F" onChange={(e) => { setCosmetologistgGender(e.target.value) }} />
          <img alt="wrinkles" height="100" width="100" src={require("../../assets/images/girl.png")} />

        </label>
        <label className='label'>

          <input type="radio" name="cosmetologist_gender" value="M" onChange={(e) => { setCosmetologistgGender(e.target.value) }} />
          <img alt="wrinkles" height="100" width="100" src={require("../../assets/images/boy.png")} /><br />

        </label>

        <InputUser value={cosmeticBusinessName} name="cosmetic_businessName" type="text" label=" שם העסק " placeholder=" שם העסק " onChange={(e) => { setCosmeticBusinessName(e.target.value) }} />

        <InputUser value={cosmeticCity} name="cosmetic_city" type="text" label="עיר" placeholder="עיר " onChange={(e) => { setCosmeticCity(e.target.value) }} />

        <InputUser value={cosmeticAddress} name="cosmetic_address" type="text" label="כתובת " placeholder="כתובת" onChange={(e) => { setCosmeticAddress(e.target.value) }} />

        <InputUser value={cosmeticLicenseNum} name="cosmetic_license_num" type="text" label="מספר עסק " placeholder="מספר עסק" onChange={(e) => { setCosmeticLicenseNum(e.target.value) }} />

        <InputUser value={cosmetologistPhoneNumber} name="cosmetologist_phoneNumber" type="text" label="מספר טלפון " placeholder="מספר טלפון" onChange={(e) => { setCosmetologistPhoneNumber(e.target.value) }} />

        <InputUser value={cosmetologistUsername} name="cosmetologist_user_name" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e) => { setCosmetologistUsername(e.target.value) }} />

        <InputUser value={cosmetologistUserPassword} name="cosmetologist_user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e) => { setCosmetologistUserPassword(e.target.value) }} />

        <br />

        <button style={{ margin: 30, backgroundColor: "black", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={addCos}> סיום הרשמה</button>
        {showPopup ?
          <PopUpCos
            header=' הרשמתך נקלטה במערכת '
            text=' נבדוק את מספר העסק שלך ותוכלי להתחיל לטפל בלקוחות בעוד כ24 שעות'
            closePopup={togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }

export default SignUpCos;
