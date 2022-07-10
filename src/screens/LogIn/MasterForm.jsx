import React, { Component } from 'react'
import Logo from '../../commons/Logo';

import '../Questionaire.css'
import { Link, useNavigate } from 'react-router-dom';
import Step1 from './StepForm/Step1';
import Step3 from './StepForm/Step3';
import validator from 'validator'
import { useState } from 'react';

const MasterForm = (props) => {
  const [formMessage, setFormMessage] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userGender, setUserGender] = useState('')
  const [username, setUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [email, setEmail] = useState('')
  const [userBirth, setUserBirth] = useState('')
  const [picture, setPicture] = useState('')
  const [userProcessImg, setUserProcessImg] = useState('')
  const [userSkinType, setUserSkinType] = useState('')
  const [planId, setPlanId] = useState('')
  const [userSkinProblem, setUserSkinProblem] = useState('')
  const [userCheek, setUserCheek] = useState('')
  const [userTzone, setUserTzone] = useState('')
  const [userSunExposure, setUserSunExposure] = useState('')
  const [userStress, setUserStress] = useState('')
  let navigate = useNavigate()

  const handleChange = event => {
    const { name, value } = event.target
    if (name === 'user_password') {
      if (!validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1, minNumbers: 1,
      })) {
        console.log('passwordisWeak')
        setFormMessage('Password not strong enough, must contain 8 caracthers with at least one upper case, one number, one lower case and a symbol')

      } else {
        console.log('passwordisStorng')
        setFormMessage('Password is Strong')

      }
    }
    if (name === 'email') {
      if (!validator.isEmail(value)) {
        setFormMessage('Email is not valid')
      } else {
        setFormMessage('Email is valid')
      }
    }
    switch (name) {
      case 'currentStep':
        setCurrentStep(value);
        break;
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'user_gender':
        setUserGender(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'user_password':
        setUserPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'user_birth':
        setUserBirth(value);
        break;
      case 'picture':
        setPicture(value);
        break;
      case 'user_processImg':
        setUserProcessImg(value);
        break;
      case 'user_skinType':
        setUserSkinType(value);
        break;
      case 'plan_id':
        setPlanId(value);
        break;
      case 'user_skinProblem':
        setUserSkinProblem(value);
        break;
      case 'user_cheek':
        setUserCheek(value);
        break;
      case 'user_Tzone':
        setUserTzone(value);
        break;
      case 'user_sunExposure':
        setUserSunExposure(value);
        break;
      case 'user_stress':
        setUserStress(value);
        break;
    }

  }

  const handleChangeByFacebookOrGoogle = (email, username, picture) => {
    setEmail(email)
    setUsername(username)
    setPicture(picture)
    _next()
  }


  const clickAcne = () => {
    setUserSkinType('שומני')
    setPlanId('1')
  }

  const clickDry = () => {
    setUserSkinType('יבש')
    setPlanId('3')
  }

  const clickNormal = () => {
    setUserSkinType('מעורב')
    setPlanId('2')
  }

  const saveSkintype = () => {
    localStorage.setItem('user_skinType', userSkinType);
  }

  const savePlan = () => {
    localStorage.setItem('plan_id', planId);
  }



  const handleSubmit = (e) => {
    console.clear();
    e.preventDefault()
    const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/LogIn/register';


    const user_skinType = localStorage.getItem('user_skinType');
    setUserSkinType(user_skinType)

    const plan_id = localStorage.getItem('plan_id');
    setPlanId(plan_id)

    const user_data = {

      first_name: firstName,
      last_name: lastName,
      user_gender: userGender,
      username: username,
      user_password: userPassword,
      email: email,
      user_birth: userBirth,
      picture: picture,
      user_processImg: userProcessImg,
      user_skinType: userSkinType,
      user_skinProblem: userSkinProblem,
      user_cheek: userCheek,
      user_Tzone: userTzone,
      user_sunExposure: userSunExposure,
      user_stress: userStress,
      user_role: null,
      user_skinType: userSkinType,

      plan_id: planId

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
          console.log(result.username);
          localStorage.setItem("appUser_id", result.appUser_id);
          localStorage.setItem("user_skinType", result.user_skinType);
          localStorage.setItem("plan_id", result.plan_id);
          localStorage.setItem("type", 0);
          navigate('/userhomepage')

        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }



  const _next = () => {
    setCurrentStep(currentStep >= 1 ? 3 : currentStep + 1)
  }

  const _prev = () => {
    setCurrentStep(currentStep <= 1 ? 1 : currentStep - 2)
  }

  /*
  * the functions for our button
  */
  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}
          className="btn btn-secondary"
          type="button" onClick={_prev}>
          חזור
        </button>
      )
    }
    return null;
  }

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}
          className="btn btn-primary float-right"
          type="button" onClick={_next}>
          הבא
        </button>
      )
    }
    return null;
  }

  return (
    <React.Fragment>
      <Logo />

      <p> {currentStep} </p>

      <form onSubmit={handleSubmit}>
        {/* 
        render the form steps and pass required props in
      */}
        <Step1
          currentStep={currentStep}
          handleChange={handleChange}
          handleChangeByFacebookOrGoogle={handleChangeByFacebookOrGoogle}

          formMessage={formMessage}

          first_name={firstName}
          last_name={lastName}
          user_gender={userGender}
          username={username}
          user_password={userPassword}
          email={email}
          user_birth={userBirth}
          picture={picture}



        />


        <Step3
          currentStep={currentStep}
          handleChange={handleChange}
          clickAcne={clickAcne}
          clickDry={clickDry}
          clickNormal={clickNormal}
          saveSkintype={saveSkintype}
          savePlan={savePlan}

          user_skinProblem={userSkinProblem}
          user_cheek={userCheek}
          user_Tzone={userTzone}
          user_sunExposure={userSunExposure}
          user_stress={userStress}
        />
        {previousButton()}
        {nextButton()}

      </form>
    </React.Fragment>
  );
}



export default MasterForm;