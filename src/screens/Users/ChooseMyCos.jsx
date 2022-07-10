import React, { Component } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCosInfo from '../../commons/CardCosInfo';
import PopUpMaslul from '../../commons/PopUpMaslul';

const ChooseMyCos = (props) => {
  let navigate=useNavigate()
  const [cos, setCos] = useState([])
  const [cosmetologistId, setCosmetologistId] = useState('')
  const [appUserId, setAppUserId] = useState(localStorage.getItem('appUser_id'))
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  useEffect(() => {
    const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/cosmetologists/GetAllCos';

    fetch(apiUrl, {
      method: 'GET',
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

          console.log("fetch btnFetchGetcos= ", result);
          result.map(st => console.log(st.cosmetologist_id));
          console.log('result[0].prod_id', result[0].cosmetologist_id);
          setCos([...result])
        },
        (error) => {
          console.log("err post=", error);
        })
  }, [])



  const chooseCos = (e) => {
    console.clear();
    e.preventDefault()
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/Users/addmycos?id=${appUserId}`;

    togglePopup();

    const user_coschoice = {

      cosmetologist_id: localStorage.getItem('cosmetologist_id')

    };

    fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(user_coschoice),
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
          console.log(result.cosmetologist_id);
          navigate('/persoarea')
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }


    return (
      <div >
        <h4 style={{ marginTop: 35 }}>בחירת  קוסמטיקאית  </h4> <hr />

        <h1 style={{ color: '#c4a092', fontSize: 20, margin: 20 }}>בחר את הקוסמטיקאית שלך </h1>

        {cos.map((cos) => <CardCosInfo key={cos.cosmetologist_id} cos={cos} />)}

        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={chooseCos} > אישור </button>
        {showPopup ?
          <PopUpMaslul
            header=' הפרטים נקלטו בהצלחה '
            text='הקוסמטיקאית קיבלה את הפרטים ותרכיב לך תוכנית אישית במהלך 24 השעות הקרובות.
            התוכנית תתעדכן בדף הבית. תודה'
            closePopup={togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }

export default ChooseMyCos;
