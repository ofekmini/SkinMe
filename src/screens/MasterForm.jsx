import React, { Component } from 'react'
import Step1 from './StepForm/Step1'
import Step2 from './StepForm/Step2'
import Step3 from './StepForm/Step3'
import Logo from '../commons/Logo';
import { FacebookLogin } from 'react-facebook-login';
import FacebookLogIn from './FacebookLogIn';
import SignUpUser from './SignUpUser';
import './Questionaire.css'
import { Link } from 'react-router-dom';

class MasterForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      first_name: "",
      last_name: "",
      user_gender: "",
      username: "",
      user_password: "",
      email: "",
      user_birth: "",
      picture: "",
      user_processImg: "",


      user_skinType: "",
      plan_id:"",

      user_role: "User",

      user_skinProblem: "",
      user_cheek: "",
      user_Tzone: "",
      user_sunExposure: "",
      user_stress: "",



    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,

    })
  }

  handleChangeByFacebookOrGoogle = (email, username, picture) => {
    
    this.setState({
      email: email,
      username: username,
      picture: picture
    })
    this._next()
  }


  clickAcne = () => {
    this.setState({
      user_skinType: 'שומני',
      plan_id:'1'

    })
  }

  clickDry = () => {
    this.setState({
      user_skinType: 'יבש',
      plan_id:'3'
    })
  }

  clickNormal = () => {
    this.setState({
      user_skinType: 'מעורב',
      plan_id:'2'
    })
  }

  saveSkintype = () => {
    const user_skinType = this.state.user_skinType;
    localStorage.setItem('user_skinType', user_skinType);


  }

  savePlan = () => {
    const plan_id = this.state.plan_id;
    localStorage.setItem('plan_id', plan_id);


  }



  handleSubmit = (e) => {
    console.clear();
    e.preventDefault()
    const apiUrl = 'http://localhost:58031/api/LogIn/register';


    const user_skinType = localStorage.getItem('user_skinType');
    this.setState({ user_skinType });

    const plan_id = localStorage.getItem('plan_id');
    this.setState({ plan_id });


    const user_data = {

      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_gender: this.state.user_gender,
      username: this.state.username,
      user_password: this.state.user_password,
      email: this.state.email,
      user_birth: this.state.user_birth,
      picture: this.state.picture,
      user_processImg: this.state.user_processImg,
      user_skinType: this.state.user_skinType,
      user_skinProblem: this.state.user_skinProblem,
      user_cheek: this.state.user_cheek,
      user_Tzone: this.state.user_Tzone,
      user_sunExposure: this.state.user_sunExposure,
      user_stress: this.state.user_stress,
      user_role: this.state.user_role,
      user_skinType: this.state.user_skinType,
      user_status:'waiting',
      plan_id: this.state.plan_id

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
          debugger
          console.log("fetch POST= ", result);
          console.log(result.username);
          console.log(this.state);
          localStorage.setItem("appUser_id", result.appUser_id);
          localStorage.setItem("user_skinType",result.user_skinType);
          localStorage.setItem("plan_id",result.plan_id);
          localStorage.setItem("type", 0);
          window.location.href = '/userhomepage';
          

        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }



  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 2
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          חזור
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          הבא
        </button>
      )
    }
    return null;
  }

  render() {

    return (
      <React.Fragment>
        <Logo />

        <p> {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
        render the form steps and pass required props in
      */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleChangeByFacebookOrGoogle={this.handleChangeByFacebookOrGoogle}

            first_name={this.state.first_name}
            last_name={this.state.last_name}
            user_gender={this.state.user_gender}
            username={this.state.username}
            user_password={this.state.user_password}
            email={this.state.email}
            user_birth={this.state.user_birth}
            picture={this.state.picture}



          />


          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            clickAcne={this.clickAcne}
            clickDry={this.clickDry}
            clickNormal={this.clickNormal}
            saveSkintype={this.saveSkintype}
            savePlan={this.savePlan}

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