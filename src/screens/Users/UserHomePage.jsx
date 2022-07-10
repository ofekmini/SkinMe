import React, { Component } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import RoutineProductsDay from '../../commons/RoutineProductsDay';
import RoutineProductsNight from '../../commons/RoutineProductsNight';





const UserHomePage = (props) => {

  const [productsday, setProductsday] = useState([])
  const [productsnight, setProductsnight] = useState([])
  const [userSkinType, setUserSkinType] = useState(localStorage.getItem('user_skinType'))
  const [planId, setPlanId] = useState(localStorage.getItem('plan_id'))
  const [appUserId, setAppUserId] = useState(localStorage.getItem('appUser_id'))
  const [products, setProducts] = useState([])

  
  const ProductsDay = () => {
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/Products/GetProdForAutoPlanDay/?id=${appUserId}`;

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
          result.map(st => console.log(st.plan_id));
          console.log('result[0].prod_id', result[0].plan_id);
          setProductsday([...result])

        },
        (error) => {
          console.log("err post=", error);
        })

  }

  const ProductsNight = () => {
    const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/Products/GetProdForAutoPlanNight/?id=${appUserId}`;

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
          result.map(st => console.log(st.plan_id));
          console.log('result[0].prod_id', result[0].plan_id);
          setProductsnight([...result])
        },
        (error) => {
          console.log("err post=", error);
        })

  }

  useEffect(() => {
    ProductsDay();
    ProductsNight();
  }, [])

    return (
      <div >

        <img alt="logo" height="120" width="120" src={require("../../assets/images/logo.png")} />
        <h2 style={{ color: '#c4a092' }} >שגרת הטיפוח שלי</h2>
        <div >

          <h2 style={{ color: '#FFAB00', backgroundColor: 'beige' }}>בוקר</h2>
          {productsday.map((productsday) => <RoutineProductsDay key={productsday.prod_id} productsday={productsday} />)} <br />
        </div>

        <div style={{ marginTop: 600 }}>

          <h2 style={{ color: '#607D8B', backgroundColor: 'beige' }}>ערב</h2>
          {productsnight.map((productsnight) => <RoutineProductsNight key={productsnight.prod_id} productsnight={productsnight} />)}
        </div>


      </div>
    )
  }



export default UserHomePage;
