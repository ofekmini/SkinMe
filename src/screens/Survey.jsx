import React, { Component } from 'react'
import './Questionaire.css'
import ButtonLogIn from '../commons/ButtonLogIn'


 class Survey extends Component {

  constructor(props){
    
    super(props)
    

    this.state={
      user_skinProblem:"",
      user_cheek:"",
      user_Tzone:"",
      user_sunExposure:"",
      user_stress:"",
      

    }

  }
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,

    })
  }
  render() {

    return (
      <div>

        <text style={{color:"black"}}>?מה היא בעיית העור העיקרית  שתרצי לטפל בה</text>

      <label className='label'>
          
        <input type="radio" name="user_skinProblem" value="קמטים"   onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
        <img alt="wrinkles" height="100" width="100" src={require("../assets/images/wrinkles.png")}/><br/>
        
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="אקנה" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="acne" height="100" width="100" src={require("../assets/images/acne.png")}/><br/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="פיגמנטציה" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="pigmentation" height="100" width="100" src={require("../assets/images/pigmentationname.png")}/><br/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="יובש" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="dryskin" height="100" width="100" src={require("../assets/images/dryskin.png")}/><br/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="שומן" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt= "oily" height="100" width="100" src={require("../assets/images/oily.png")}/><br/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="נקבוביות" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="pores" height="100" width="100" src={require("../assets/images/pores.png")}/><br/>
          
      </label><br/>

      <text style={{color:"black"}}>?איך הלחיים שלך מרגישות</text><br/>
      
      <label className='label'>
          
          <input type="radio" name="user_cheek" value="יבשות" onChange={(e)=>{this.setState({user_cheek:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/dry.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_cheek" value="נינוחות" onChange={(e)=>{this.setState({user_cheek:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/relax.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_cheek" value="שומניות" onChange={(e)=>{this.setState({user_cheek:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/oilyface.png")}/><br/>
          
      </label><br/>

      <text style={{color:"black"}}> ? שלך מרגיש Tאיך האזור ה </text><br/>

      <label className='label'>
          
          <input type="radio" name="user_Tzone" value="יבשות" onChange={(e)=>{this.setState({user_Tzone:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/dry.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_Tzone" value="נינוחות" onChange={(e)=>{this.setState({user_Tzone:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/relax.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_Tzone" value="שומניות" onChange={(e)=>{this.setState({user_Tzone:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/oilyface.png")}/><br/>
          
      </label><br/>

      <text style={{color:"black"}}>  ? כמות החשיפה שלך בשמש בממוצע  </text><br/>

      <label className='label'>
          
          <input type="radio" name="user_sunExposure" value="פחות שמש" onChange={(e)=>{this.setState({user_sunExposure:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/sunny.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_sunExposure" value="המון שמש" onChange={(e)=>{this.setState({user_sunExposure:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/verysunny.png")}/><br/>
          
      </label><br/>

      <text style={{color:"black"}}>  ?רמת המתח בה את נמצאת </text><br/>

      <label className='label'>
          
          <input type="radio" name="user_stress" value="גבוהה " onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/high.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_stress" value="בינונית" onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/medium.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_stress" value="נמוכה" onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/little.png")}/><br/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_stress" value="ללא" onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/none.png")}/><br/>
          
      </label>


      <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="סיום הרשמה"/>


      </div>
    )
  }
}
export default Survey;