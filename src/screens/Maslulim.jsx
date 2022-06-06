import React, { Component } from 'react'

import Logo from '../commons/Logo';
import { FacebookLogin } from 'react-facebook-login';
import FacebookLogIn from './FacebookLogIn';
import SignUpUser from './SignUpUser';

import Survey from './StepsMaslul/Survey';
import Payment from './StepsMaslul/Payment';
import ChooseMaslul from './StepsMaslul/ChooseMaslul';
import CardCosInfo from '../commons/CardCosInfo';
import './Questionaire.css'

class Maslulim extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,

      user_period:"",
      user_dermatology:"",
      user_currentProducts:"",
      user_sensitive:"",
      user_areas:"",

      picture:"",


      user_route:"",
      user_status:"Waiting"

      
      
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }


  
  clickMaslulOne=()=>{
    this.setState({
      user_route:'1'
    })
  }
  
  clickMaslulTwo=()=>{
    this.setState({
      user_route:'2'
    })
  }

  saveMaslul = () => {
    const user_route = this.state.user_route;
    localStorage.setItem('user_route',user_route);
 
    }

    
  
  handleSubmit = (e)=> {
    console.clear();
    e.preventDefault()
    const apiUrl = 'http://localhost:58031/api/Users/addmaslul';

    
    const user_route = localStorage.getItem('user_route') ;
    this.setState({user_route });
    

    const user_maslulinfo={
        
      

      user_period:this.state.user_period,
      user_dermatology:this.state.user_dermatology,
      user_currentProducts:this.state.user_currentProducts,
      user_sensitive:this.state.user_sensitive,
      user_areas:this.state.user_areas,

      user_route:this.state.user_route



      
      

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
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
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
      <button style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      חזור
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      הבאה
      </button>        
    )
  }
  return null;
}
  
  render() {   

    
    

    return (
      <React.Fragment>
      
     
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Survey
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
         
          
          user_period={this.state.user_period}
          user_dermatology={this.state.user_dermatology}
          user_currentProducts={this.state.user_currentProducts}
          user_sensitive={this.state.user_sensitive}
          user_areas={this.state.user_areas}
          
        
         
        />
        <Payment
        currentStep={this.state.currentStep} 
        handleChange={this.handleChange}
        saveMaslul={this.saveMaslul}
        
        />
        
        <ChooseMaslul
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          clickMaslulOne={this.clickMaslulOne}
          clickMaslulTwo={this.clickMaslulTwo}
          

      
         
        

        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}


export default Maslulim ;