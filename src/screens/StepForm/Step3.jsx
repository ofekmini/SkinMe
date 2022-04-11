import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';




function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
    
    <h3 style={{color:'#c4a092',textDecorationLine:'underline'}}>  תני לנו להכיר את העור שלך </h3>

    <text style={{color:"black"}}>?מה היא בעיית העור העיקרית  שתרצי לטפל בה</text>


   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_skinProblem" id="radiowrinkles" value="קמטים" onChange={props.handleChange} onClick={props.clickWrinkles}/>
   <label  for="radiowrinkles"><img alt="wrinkles" height="100" width="100" src={require("../../assets/images/wrinkles.png")}/></label>
    
   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_skinProblem" id="radioacne" value="אקנה" onChange={props.handleChange} onClick={props.clickAcne}/>
   <label  for="radioacne"><img alt="acne" height="100" width="100"  src={require("../../assets/images/acne.png")}/></label>
   

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_skinProblem" id="radiopig" value="פיגמנטציה" onChange={props.handleChange}/>
   <label  for="radiopig"><img alt="pigmentation" height="100" width="100" src={require("../../assets/images/pigmentationname.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_skinProblem" id="radiodryskin" value="יובש" onChange={props.handleChange}/>
   <label  for="radiodryskin"><img alt="dryskin" height="100" width="100" src={require("../../assets/images/dryskin.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_skinProblem" id="radiooily" value="שומן" onChange={props.handleChange}/>
   <label  for="radiooily"><img alt="oily" height="100" width="100" src={require("../../assets/images/oily.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_skinProblem" id="radiopore" value="נקבוביות" onChange={props.handleChange}/>
   <label  for="radiopore"><img alt="pores" height="100" width="100" src={require("../../assets/images/pores.png")}/></label><br/>

   <text style={{color:"black"}}>?איך הלחיים שלך מרגישות</text><br/>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_cheek" id="radiodry" value="יבשות" onChange={props.handleChange} onClick={props.clickWrinkles}/>
   <label  for="radiodry"><img alt="dry" height="100" width="100" src={require("../../assets/images/dry.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_cheek" id="radiorelax" value="נינוחות" onChange={props.handleChange}/>
   <label  for="radiorelax"><img alt="relax" height="100" width="100" src={require("../../assets/images/relax.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_cheek" id="radiooilyface" value="שומניות" onChange={props.handleChange}/>
   <label  for="radiooilyface"><img alt="oilyface" height="100" width="100" src={require("../../assets/images/oilyface.png")}/></label><br/>
   
   <text style={{color:"black"}}> ? שלך מרגיש Tאיך האזור ה </text><br/>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_Tzone" id="radiodry2" value="יבשות" onChange={props.handleChange} onClick={props.clickWrinkles}/>
   <label  for="radiodry2"><img alt="dry" height="100" width="100" src={require("../../assets/images/dry.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_Tzone" id="radiorelax2" value="נינוחות" onChange={props.handleChange}/>
   <label  for="radiorelax2"><img alt="relax" height="100" width="100" src={require("../../assets/images/relax.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_Tzone" id="radiooilyface2" value="שומניות" onChange={props.handleChange} onClick={props.clickAcne}/>
   <label  for="radiooilyface2"><img alt="oilyface" height="100" width="100" src={require("../../assets/images/oilyface.png")}/></label><br/>

   <text style={{color:"black"}}>  ? כמות החשיפה שלך בשמש בממוצע  </text><br/>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_sunExposure" id="radiosunny" value="פחות שמש" onChange={props.handleChange}/>
   <label  for="radiosunny"><img alt="radiosunny" height="100" width="100" src={require("../../assets/images/sunny.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_sunExposure" id="radioverysunny" value="המון שמש" onChange={props.handleChange}/>
   <label  for="radioverysunny"><img alt="radioverysunny" height="100" width="100" src={require("../../assets/images/verysunny.png")}/></label><br/>

   <text style={{color:"black"}}>  ?רמת המתח בה את נמצאת </text><br/>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_stress" id="radiohigh" value="גבוהה" onChange={props.handleChange}/>
   <label  for="radiohigh"><img alt="radiohigh" height="80" width="80" src={require("../../assets/images/high.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_stress" id="radiom" value="בינונית" onChange={props.handleChange}/>
   <label  for="radiom"><img alt="m" height="80" width="80" src={require("../../assets/images/medium.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_stress" id="radiolow" value="נמוכה" onChange={props.handleChange}/>
   <label  for="radiolow"><img alt="low" height="80" width="80" src={require("../../assets/images/little.png")}/></label>

   <input  style={{position:'absolute', opacity: 0,width: 0, height: 0}} type="radio" name="user_stress" id="radionone" value="ללא" onChange={props.handleChange}/>
   <label  for="radionone"><img alt="none" height="80" width="80" src={require("../../assets/images/none.png")}/></label><br/>



    </div>

    <button  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}>סיום הרשמה </button>
    </React.Fragment>
  );
}

export default Step3;