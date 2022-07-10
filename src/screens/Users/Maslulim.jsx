import React, { Component } from 'react'



import Survey from './StepsMaslul/Survey';
import Payment from './StepsMaslul/Payment';

import '../Questionaire.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Maslulim = (props) => {
  let navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [userPeriod, setUserPeriod] = useState('')
  const [userDermatology, setUserDermatology] = useState('')
  const [userCurrentProducts, setUserCurrentProducts] = useState('')
  const [userSensitive, setUserSensitive] = useState('')
  const [userAreas, setUserAreas] = useState('')
  const [userPicsprocess, setUserPicsprocess] = useState(null)
  const [userRoute, setUserRoute] = useState(localStorage.getItem('user_route'))
  const [userStatus, setUserStatus] = useState('Waiting')
  const [appUserId, setAppUserId] = useState(localStorage.getItem('appUser_id'))

  const handleChange = event => {
    const { name, value } = event.target
    switch (name) {
      case 'user_period':
        setUserPeriod(value)
        break
      case 'user_dermatology':
        setUserDermatology(value)
        break
      case 'user_currentProducts':
        setUserCurrentProducts(value)
        break
      case 'user_sensitive':
        setUserSensitive(value)
        break
      case 'user_areas':
        setUserAreas(value)
        break

    }
  }



  const clickMaslulOne = () => {
    setUserRoute('1')
  }

  const clickMaslulTwo = () => {
    setUserRoute('2')
  }

  const saveMaslul = () => {
    const user_route = userRoute;
    localStorage.setItem('user_route', user_route);

  }




  const handlePicture = (e) => {


    const user_picsprocess = e.target.files[0]
    const base64 = convertToBase64(user_picsprocess)
    setUserPicsprocess(base64)
  }

  const convertToBase64 = (user_picsprocess) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(user_picsprocess)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }




  const handleSubmit = (e) => {
    console.clear();
    e.preventDefault()
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/Users/addmaslul?id=${appUserId}`;

    const user_maslulinfo = {


      user_period: userPeriod,
      user_dermatology: userDermatology,
      user_currentProducts: userCurrentProducts,
      user_sensitive: userSensitive,
      user_areas: userAreas,

      user_route: userRoute,
      user_status: "waiting",

      user_picsprocess: userPicsprocess

    };

    fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(user_maslulinfo),
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
          console.log(result.username);
          navigate('/choosecos')
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


      <p> {currentStep} </p>

      <form onSubmit={handleSubmit}>
        {/* 
        render the form steps and pass required props in
      */}
        <Survey
          currentStep={currentStep}
          handleChange={handleChange}
          handlePicture={handlePicture}


          user_period={userPeriod}
          user_dermatology={userDermatology}
          user_currentProducts={userCurrentProducts}
          user_sensitive={userSensitive}
          user_areas={userAreas}



        />
        <Payment
          currentStep={currentStep}
          handleChange={handleChange}
          saveMaslul={saveMaslul}

        />


        {previousButton()}
        {nextButton()}

      </form>
    </React.Fragment>
  );
}



export default Maslulim;