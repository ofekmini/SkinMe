import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';


export default function LoginWGoggle(props) {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = (response) => {
    
    props.handleChange(response.profileObj.email, response.profileObj.name, response.profileObj.imageUrl)
    // setLoginData(response.profileObj)
  }

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };





  return (
    <div>
      {loginData ? (
        <div>
          <h3 style={{ color: "black" }}>You logged in as {loginData.email}</h3>
          <button onClick={handleLogout}>Logout</button>
          
        </div>
      ) : (

        <GoogleLogin
          clientId="95258654142-ka0kafl89rcu23iq0h9bs5p3ljcrbhr5.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        ></GoogleLogin>
      )}



    </div>
  )
}
