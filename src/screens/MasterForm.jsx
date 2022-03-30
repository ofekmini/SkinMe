import React, { Component } from 'react'
import Step1 from './StepForm/Step1'
import Step2 from './StepForm/Step2'
import Step3 from './StepForm/Step3'
import Logo from '../commons/Logo';
import './Questionaire.css'
import { FacebookLogin } from 'react-facebook-login';
import FacebookLogIn from './FacebookLogIn';


class MasterForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      user_firstName:"",
      user_lastName:"", 
      user_gender:"",
      username:"",
      user_password:"",
      user_email:"",
      user_birth:"",
      user_profileImg:null,
      user_processImg:"",
      user_skinType:"",

      user_skinProblem:"",
      user_cheek:"",
      user_Tzone:"",
      user_sunExposure:"",
      user_stress:"",
      
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  signup=(res) =>{  
    const responseFacebook = {  
      Name: res.name,  
      email: res.email,  
      token: res.accessToken,  
      Image: res.picture.data.url,  
      ProviderId: 'Facebook'
     }} 
  
  /**handleChange = (e) => {
    alert(e.target.name)
    this.setState({
      [e.target.name]: e.target.value,
      user_birth:e,
      user_profileImg:e.target.files[0]

      
    })
    = this.state
    alert(`Your registration detail: \n 
           First Name: ${user_firstName} \n 
           user_lastName: ${user_lastName} \n
           username: ${username}\n
           user gender:${user_gender}\n
           user_password: ${user_password} \n 
           user_birth: ${user_birth} \n
           user_profileImg: ${user_profileImg}
           user_skinProblem: ${user_skinProblem} \n 
           user_cheek: ${user_cheek} \n
           user_Tzone: ${user_Tzone}
           user_sunExposure: ${user_sunExposure} \n 
           user_stress: ${user_stress} \n
           `)
  }
  }**/
   
  handleSubmit = (e)=> {
    console.clear();
    e.preventDefault()
    const apiUrl = 'https://localhost:44326/api/LogIn/register';

    const user_data={
        
      user_firstName:this.state.user_firstName,
      user_lastName:this.state.user_lastName, 
      user_gender:this.state.user_gender,
      username:this.state.username,
      user_password:this.state.user_password,
      user_email:this.state.user_email,
      user_birth:this.state.user_birth,
      user_profileImg:this.state.user_profileImg,
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
  
  
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 2
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    const responseFacebook = (response) => {  
      console.log(response);  
      var res = response.profileObj;  
      console.log(res);   
      this.signup(response);
      }
    return (
      <React.Fragment>
      <Logo/>
      
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          user_firstName={this.state.user_firstName}
          user_lastName= {this.state.user_lastName}
          user_gender={this.state.user_gender}
          username={this.state.username}
          user_password={this.state.user_password}
          user_email={this.state.user_email}
          user_birth={this.state.user_birth}
          user_profileImg={this.state.user_profileImg}

        />
     
        
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          user_skinProblem={this.state.user_skinProblem}
          user_cheek={this.state.user_cheek}
          user_Tzone={this.state.user_Tzone}
          user_sunExposure={this.state.user_sunExposure}
          user_stress={this.state.user_stress}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}






export default MasterForm;