import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';



function Payment(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
     
    <div>
      <div style={{backgroundColor:'#EEE4C4'}}>
        <img alt="cart" height="60" width="60" style={{margin:0}} src={require("../../assets/images/cart.png")}/>
        <h3> פירוט הרכישה </h3> 

        <p>add maslul info and price ????</p>
      </div>
      <img alt="visa" height="40" width="40"  src={require("../../assets/images/visalogo.png")}/>

      <img alt="mc" height="40" width="40" style={{marginLeft:20}}src={require("../../assets/images/MasterCardlogo.png")}/>

    <div className="form-group" style={{border: '#B9D6BC solid 2px',borderRadius:10 , padding:20,margin:10}}>
      
      <InputUser value={props.creditcard} name="creditcard" type="text" label="מספר כרטיס " placeholder="מספר כרטיס  "  onChange={props.handleChange}/>  
     
      <label style={{color:"black",fontSize:13,textAlign:"right"}}>   תוקף הכרטיס <br/>  

      <label style={{color:"black",fontSize:13,textAlign:"right"}}>   שנה     </label> 
        
        <select  name="prod_type" onChange={props.handlechange}>
           <option value="סרום" >1</option>
           <option value="סרום" >2</option>
           <option value="סרום" >3</option>
           <option value="סרום" >4</option>
           <option value="סרום" >5</option>
           <option value="סרום" >6</option>
           <option value="סרום" >7</option>
           <option value="סרום" >8</option>
           <option value="סרום" >9</option>
           <option value="סרום" >10</option>
           <option value="סרום" >11</option>
           <option value="סרום" >12</option>
        </select>
       

        <label style={{color:"black",margin:5,fontSize:13,textAlign:"right"}}>   חודש   </label> 
        
        <select  name="prod_type" onChange={props.handlechange}>
           <option value="סרום" >2022</option>
           <option value="סרום" >2023</option>
           <option value="סרום" >2024</option>
           <option value="סרום" >2025</option>
           <option value="סרום" >2026</option>
           <option value="סרום" >2027</option>
           <option value="סרום" >2028</option>
           <option value="סרום" >2029</option>
           <option value="סרום" >2030</option>
           <option value="סרום" >2031</option>
           <option value="סרום" >2032</option>
           <option value="סרום" >2033</option>
           <option value="סרום" >2034</option>
           <option value="סרום" >2035</option>
           <option value="סרום" >2036</option>
           <option value="סרום" >2037</option>
           <option value="סרום" >2038</option>
           <option value="סרום" >2039</option>
           <option value="סרום" >2040</option>
           <option value="סרום" >2041</option>
           <option value="סרום" >2042</option>
           <option value="סרום" >2043</option>
           <option value="סרום" >2044</option>
           <option value="סרום" >2045</option>
        </select>
        </label> 


      <InputUser value={props.cvv} name="CVV" type="text" label="CVV" placeholder="CVV"  onChange={props.handleChange}/> 
      <InputUser value={props.cardholder} name="carholder" type="text" label="שם בעל הכרטיס" placeholder="שם בעל הכרטיס"  onChange={props.handleChange}/>  

        
    </div>
    <button  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={props.saveMaslul}> בחר את הקוסמטיקאית שלך </button>
    </div>
    

  );
}
export default  Payment ;