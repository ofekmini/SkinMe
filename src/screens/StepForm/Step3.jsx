import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';
import { Link  } from 'react-router-dom';





function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 

  
  return(
    <React.Fragment>
    <div className="form-group">
    
    <text style={{color:"black"}}>?מה היא בעיית העור העיקרית  שתרצי לטפל בה</text>

<label className='label'>
    
  <input type="radio" name="user_skinProblem" value="קמטים"   onChange={props.handleChange} onClick={props.clickDry}/>
  <img alt="wrinkles" height="100" width="100" src={require("../../assets/images/wrinkles.png")}/>
  
</label>

<label className='label'>
    
    <input type="radio" name="user_skinProblem" value="אקנה" onChange={props.handleChange} onClick={props.clickAcne}/>
    <img alt="acne" height="100" width="100" src={require("../../assets/images/acne.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_skinProblem" value="פיגמנטציה" onChange={props.handleChange}/>
    <img alt="pigmentation" height="100" width="100" src={require("../../assets/images/pigmentationname.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_skinProblem" value="יובש" onChange={props.handleChange} onClick={props.clickDry}/>
    <img alt="dryskin" height="100" width="100" src={require("../../assets/images/dryskin.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_skinProblem" value="שומן" onChange={props.handleChange}  onClick={props.clickAcne}/>
    <img alt= "oily" height="100" width="100" src={require("../../assets/images/oily.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_skinProblem" value="נקבוביות" onChange={props.handleChange}/>
    <img alt="pores" height="100" width="100" src={require("../../assets/images/pores.png")}/>
    
</label><br/>

<text style={{color:"black"}}>?איך הלחיים שלך מרגישות</text><br/>

<label className='label'>
    
    <input type="radio" name="user_cheek" value="יבשות" onChange={props.handleChange} onClick={props.clickDry}/>
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/dry.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_cheek" value="נינוחות" onChange={props.handleChange}/>
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/relax.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_cheek" value="שומניות" onChange={props.handleChange}  onClick={props.clickAcne} />
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/oilyface.png")}/>
    
</label><br/>

<text style={{color:"black"}}> ? שלך מרגיש Tאיך האזור ה </text><br/>

<label className='label'>
    
    <input type="radio" name="user_Tzone" value="יבשות" onChange={props.handleChange} onClick={props.clickDry}/>
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/dry.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_Tzone" value="נינוחות" onChange={props.handleChange}/>
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/relax.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_Tzone" value="שומניות" onChange={props.handleChange}  onClick={props.clickAcne}/>
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/oilyface.png")}/>
    
</label><br/>

<text style={{color:"black"}}>  ? כמות החשיפה שלך בשמש בממוצע  </text><br/>

<label className='label'>
    
    <input type="radio" name="user_sunExposure" value="פחות שמש" onChange={props.handleChange}/>
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/sunny.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_sunExposure" value="המון שמש" onChange={props.handleChange}/>
    <img alt="oilyface" height="100" width="100" src={require("../../assets/images/verysunny.png")}/>
    
</label><br/>

<text style={{color:"black"}}>  ?רמת המתח בה את נמצאת </text><br/>

<label className='label'>
    
    <input type="radio" name="user_stress" value="גבוהה " onChange={props.handleChange}/>
    <img alt="oilyface" height="80" width="80" src={require("../../assets/images/high.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_stress" value="בינונית" onChange={props.handleChange}/>
    <img alt="oilyface" height="80" width="80" src={require("../../assets/images/medium.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_stress" value="נמוכה" onChange={props.handleChange}/>
    <img alt="oilyface" height="80" width="80" src={require("../../assets/images/little.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_stress" value="ללא" onChange={props.handleChange}/>
    <img alt="oilyface" height="80" width="80" src={require("../../assets/images/none.png")}/>
    
</label>

    </div>
   
      
    
    <button  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={props.saveSkintype}>סיום הרשמה </button>
    
    </React.Fragment>
  );
}

export default Step3;