import React, { Component } from 'react'
import './Questionaire.css'
import ButtonLogIn from '../commons/ButtonLogIn'
import SignUpUser from './SignUpUser'
import SignUp from './SignUp'


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
  addUser = (e)=>{
    console.clear();
    e.preventDefault()
    const apiUrl = 'https://localhost:44326/api/LogIn';
    
    

    const user_data={
        
        
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
  render() {

     
    return (
      <div>

      <text style={{color:"black"}}>?מה היא בעיית העור העיקרית  שתרצי לטפל בה</text>

      <label className='label'>
          
        <input type="radio" name="user_skinProblem" value="קמטים"   onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
        <img alt="wrinkles" height="100" width="100" src={require("../assets/images/wrinkles.png")}/>
        
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="אקנה" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="acne" height="100" width="100" src={require("../assets/images/acne.png")}/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="פיגמנטציה" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="pigmentation" height="100" width="100" src={require("../assets/images/pigmentationname.png")}/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="יובש" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="dryskin" height="100" width="100" src={require("../assets/images/dryskin.png")}/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="שומן" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt= "oily" height="100" width="100" src={require("../assets/images/oily.png")}/>
          
      </label>

      <label className='label'>
          
          <input type="radio" name="user_skinProblem" value="נקבוביות" onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}/>
          <img alt="pores" height="100" width="100" src={require("../assets/images/pores.png")}/>
          
      </label><br/>

      <text style={{color:"black"}}>?איך הלחיים שלך מרגישות</text><br/>
      
      <label className='label'>
          
          <input type="radio" name="user_cheek" value="יבשות" onChange={(e)=>{this.setState({user_cheek:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/dry.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_cheek" value="נינוחות" onChange={(e)=>{this.setState({user_cheek:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/relax.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_cheek" value="שומניות" onChange={(e)=>{this.setState({user_cheek:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/oilyface.png")}/>
          
      </label><br/>

      <text style={{color:"black"}}> ? שלך מרגיש Tאיך האזור ה </text><br/>

      <label className='label'>
          
          <input type="radio" name="user_Tzone" value="יבשות" onChange={(e)=>{this.setState({user_Tzone:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/dry.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_Tzone" value="נינוחות" onChange={(e)=>{this.setState({user_Tzone:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/relax.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_Tzone" value="שומניות" onChange={(e)=>{this.setState({user_Tzone:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/oilyface.png")}/>
          
      </label><br/>

      <text style={{color:"black"}}>  ? כמות החשיפה שלך בשמש בממוצע  </text><br/>

      <label className='label'>
          
          <input type="radio" name="user_sunExposure" value="פחות שמש" onChange={(e)=>{this.setState({user_sunExposure:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/sunny.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_sunExposure" value="המון שמש" onChange={(e)=>{this.setState({user_sunExposure:e.target.value})}}/>
          <img alt="oilyface" height="100" width="100" src={require("../assets/images/verysunny.png")}/>
          
      </label><br/>

      <text style={{color:"black"}}>  ?רמת המתח בה את נמצאת </text><br/>

      <label className='label'>
          
          <input type="radio" name="user_stress" value="גבוהה " onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/high.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_stress" value="בינונית" onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/medium.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_stress" value="נמוכה" onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/little.png")}/>
          
      </label>
      <label className='label'>
          
          <input type="radio" name="user_stress" value="ללא" onChange={(e)=>{this.setState({user_stress:e.target.value})}}/>
          <img alt="oilyface" height="80" width="80" src={require("../assets/images/none.png")}/>
          
      </label>
     
   
      <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="סיום הרשמה" onClick={this.addUser}/>


      </div>
    )
  }
}
export default Survey;