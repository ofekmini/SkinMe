import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';
import { Link } from 'react-router-dom';





function Survey(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group" style={{marginTop:50}}>

    <input style={{marginLeft:50}} type="file"  name="picture"  value={props.picture}  onChange={props.handleChange} />  <br/> <br/>
    
    <text style={{color:"black"}}> מחזור חדשי </text><br/>


<label className='label'>
    
    <input type="radio" name="user_period" value="לא רלוונטי" onChange={props.handleChange} />
    <img alt="notrelevant" height="85" width="85" src={require("../../assets/images/notrelevant.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_period" value="פסק" onChange={props.handleChange}/>
    <img alt="oilyface" height="85" width="85" src={require("../../assets/images/Interrupt.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_period" value="לא סדיר" onChange={props.handleChange}  onClick={props.clickAcne} />
    <img alt="oilyface" height="85" width="85" src={require("../../assets/images/irregular.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_period" value="סדיר" onChange={props.handleChange}/>
    <img alt="oilyface" height="85" width="85" src={require("../../assets/images/Regular.png")}/>
    
</label><br/>

<text style={{color:"black"}}> ? האם היית בטיפול דרמטולוגי בעבר</text><br/>

<label className='label'>
    
    <input type="radio" name="user_dermatology" value="n" onChange={props.handleChange} onClick={props.clickDry}/>
    <img alt="dermano" height="100" width="100" src={require("../../assets/images/no.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_dermatology" value="y" onChange={props.handleChange}/>
    <img alt="dermayes" height="100" width="100" src={require("../../assets/images/yes.png")}/>
    
</label><br/>


<text style={{color:"black"}}> באיזה משחותת את/ה משתמש/ת כרגע בעור   </text><br/>

<label className='label'>
    
    <input type="radio" name="user_currentProducts" value="לא משתמשת  " onChange={props.handleChange}/>
    <img alt="notusing" height="120" width="120" src={require("../../assets/images/notusing.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_currentProducts" value="רטין A " onChange={props.handleChange}/>
    <img alt="retinA" height="120" width="120" src={require("../../assets/images/retinA.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_currentProducts" value="חומצות " onChange={props.handleChange}/>
    <img alt="acids" height="120" width="120" src={require("../../assets/images/acids.png")}/>
    
</label><br/>

<text style={{color:"black"}}> ? האם העור שלך רגיש   </text><br/>

<label className='label'>
    
    <input type="radio" name="user_sensitive" value="לא רגיש " onChange={props.handleChange}/>
    <img alt="notsensitive" height="120" width="120" src={require("../../assets/images/notsensitive.png")}/>
    
</label>
<label className='label'>
    
    <input type="radio" name="user_sensitive" value="רגיש לפעמים" onChange={props.handleChange}/>
    <img alt="littlesensitive" height="120" width="120" src={require("../../assets/images/littlesensitive.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_sensitive" value="רגיש מאוד " onChange={props.handleChange}/>
    <img alt="verysensitive" height="120" width="120" src={require("../../assets/images/verysensitive.png")}/>
    
</label> <br/>

<text style={{color:"black"}}> באיזה אזורים ספציפיים היית רוצה לטפל    </text><br/>

<label className='label'>
    
    <input type="radio" name="user_areas" value="ידיים" onChange={props.handleChange}/>
    <img alt="verysensitive" height="120" width="120" src={require("../../assets/images/hands.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_areas" value="צוואר" onChange={props.handleChange}/>
    <img alt="verysensitive" height="120" width="120" src={require("../../assets/images/neck.png")}/>
    
</label>

<label className='label'>
    
    <input type="radio" name="user_areas" value="פנים" onChange={props.handleChange}/>
    <img alt="verysensitive" height="120" width="120" src={require("../../assets/images/face.png")}/>
    
</label>

    </div>
   
  
    </React.Fragment>
  );
}

export default Survey;