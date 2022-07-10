import React, { Component } from 'react'
import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';





const FacebookLogIn = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSocialMedia, setIsSocialMedia] = useState(false)
  const [userID, setuserID] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [picture, setPicture] = useState('')


  const responseFacebook = async (response) => {

    props.handleChange(response.email, response.name, response.picture.data.url)
    setIsLoggedIn(true)
    setIsSocialMedia(true)
    setuserID(response.userID)
    setName(response.name)
    setEmail(response.email)
    setPicture(response.picture.data.url)
  };

  return (
    <div>        
      <FacebookLogin style={{ background: '#2980b9' }}
      appId="229777149335447"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
    /></div>);
}
export default FacebookLogIn;