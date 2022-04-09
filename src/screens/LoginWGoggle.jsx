import React ,{useState} from 'react'
import GoogleLogin from 'react-google-login';
import SignUpUser from './SignUpUser';

export default function LoginWGoggle() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  
  const handleFailure = (result) => {
    alert(result);
  };
   
  const handleLogin=(googleData)=>{
      console.log(googleData);
  }

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  const login=(googleData)=>{
    
    console.clear();


    const apiUrl = 'https://localhost:44326/api/LogIn/register';

    const user_data={
        
      user_firstName:this.state.user_firstName,
      user_lastName:this.state.user_lastName,
      user_gender:this.state.user_gender,
      username:this.state.username,
      user_password:this.state.user_password,
      email:this.state.email,
      user_birth:this.state.user_birth,
      picture:this.state.picture,
      user_processImg:this.state.user_processImg,
      user_skinType:this.state.user_skinType,
      user_skinProblem:this.state.user_skinProblem,
      user_cheek:this.state.user_cheek,
      user_Tzone:this.state.user_Tzone,
      user_sunExposure:this.state.user_sunExposure,
      user_stress:this.state.user_stress,

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
          console.log(this.state);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }



  return (
    <div>
       {loginData ? (
            <div>
              <h3 style={{color:"black"}}>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
              <SignUpUser/>
            </div>
          ) : (

           <GoogleLogin
              clientId="849215880769-ulcnv9ob7utoms2jn383rjimathrcsrt.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}



    </div>
  )
}
