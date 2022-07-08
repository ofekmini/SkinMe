import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';

import Logo from '../../commons/Logo';
import PopUpCos from '../../commons/PopUpCos';
import validator from 'validator';

let local = false;
//const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/test2/tar1/api/';
    const apiUrl='http://localhost:58031/api/LogIn/registerCos';
//if (local) {
 // apiUrl = 'https://localhost:44326/api/LogIn/register';
//}

 class SignUpCos extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      cosmetologist_first_name:"",
      cosmetologist_last_name:"", 
      cosmetologist_user_name:"",
      cosmetologist_user_password:"",
      cosmetologist_email:"",
      cosmetologist_gender:"",
      cosmetic_businessName:"",
      cosmetic_address:"",
      cosmetic_city:"",
      cosmetic_license_num:"",
      cosmetic_status:"Pending",
      cosmetologist_phoneNumber:"",
      cosmetologist_sumRate:"0",
      cosmetologist_numOfRates:"0",
      cosmetologist_rate:"0",
      
      showPopup: false,
      formMessage:null
         
  }
}

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handlechange = (e) => {
    const { name, value } = e.target
    
      if(name === 'cosmetologist_user_password') {
        if (!validator.isStrongPassword(value,{
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1, minNumbers: 1, 
        })) {
          console.log('passwordisWeak')
          this.setState({
            formMessage: 'Password not strong enough, must contain 8 caracthers with at least one upper case, one number, one lower case and a symbol'
          })
        } else {
          console.log('passwordisStorng')
          this.setState({
            formMessage: 'Password is Strong'
          })
        }
      }
      if(name === 'cosmetologist_email') {
        if (!validator.isEmail(value)) {
          this.setState({
            formMessage: 'Email is not valid'
          })
        } else {
     
          this.setState({
            formMessage: 'Email is valid'
          })
        }
      }
      this.setState({
        [name]:value,
    })
  }
  addCos = (e)=>{
    console.clear();
    
    debugger
    
    this.togglePopup(); 

    const cos_data={
      cosmetologist_first_name:this.state.cosmetologist_first_name,
      cosmetologist_last_name:this.state.cosmetologist_last_name, 
      cosmetologist_user_name:this.state.cosmetologist_user_name,
      cosmetologist_user_password:this.state.cosmetologist_user_password,
      cosmetologist_gender:this.state.cosmetologist_gender,
      cosmetologist_email:this.state.cosmetologist_email,
      cosmetic_businessName:this.state.cosmetic_businessName,
      cosmetic_address:this.state.cosmetic_address,
      cosmetic_city:this.state.cosmetic_city,
      cosmetic_license_num:this.state.cosmetic_license_num,
      cosmetologist_phoneNumber:this.state.cosmetologist_phoneNumber,
      cosmetic_status:this.state.cosmetic_status,
      
      cosmetologist_rate:this.state.cosmetologist_rate,
      cosmetologist_sumRate:this.state.cosmetologist_sumRate,
      cosmetologist_numOfRates:this.state.cosmetologist_numOfRates
     
        
      
    };
    
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(cos_data),
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
          console.log(result.cosmetologist_user_name);
          console.log(this.state);
          localStorage.setItem("type",1);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }
 
  render() {

    return (

      <div>

      <Logo/>

        <InputUser value={this.cosmetologist_first_name} name="cosmetologist_first_name" type="text" label="שם פרטי " placeholder="שם פרטי " onChange={this.handlechange}/>

        <InputUser value={this.cosmetologist_last_name} name="cosmetologist_last_name" type="text" label="שם משפחה   " placeholder="שם משפחה " onChange={this.handlechange}/>  

        <InputUser value={this.cosmetologist_email} name="cosmetologist_email" type="text" label="מייל " placeholder="מייל"  onChange={this.handlechange}/>
       

        <label className='label' >
        <input type="radio" name="cosmetologist_gender" value="F"   onChange={this.handlechange}/>
        <img alt="wrinkles" height="100" width="100" src={require("../../assets/images/girl.png")}/>
        
        </label>
        <label className='label'>
          
        <input type="radio" name="cosmetologist_gender" value="M"   onChange={this.handlechange}/>
        <img alt="wrinkles" height="100" width="100" src={require("../../assets/images/boy.png")}/><br/>
        
        </label>
        
        <InputUser value={this.cosmetic_businessName} name="cosmetic_businessName" type="text" label=" שם העסק " placeholder=" שם העסק " onChange={this.handlechange}/>

        <InputUser value={this.cosmetic_city} name="cosmetic_city" type="text" label="עיר" placeholder="עיר " onChange={this.handlechange}/>  

        <InputUser value={this.cosmetic_address} name="cosmetic_address" type="text" label="כתובת " placeholder="כתובת"  onChange={this.handlechange}/>
        
        <InputUser value={this.cosmetic_license_num} name="cosmetic_license_num" type="text" label="מספר עסק " placeholder="מספר עסק"  onChange={this.handlechange}/>
        
        <InputUser value={this.cosmetologist_phoneNumber} name="cosmetologist_phoneNumber" type="text" label="מספר טלפון " placeholder="מספר טלפון"  onChange={this.handlechange}/>

        <InputUser value={this.cosmetologist_user_name} name="cosmetologist_user_name" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={this.handlechange}/>

        <InputUser value={this.cosmetologist_user_password} name="cosmetologist_user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={this.handlechange}/>
        {this.state.formMessage && <span style={{
          fontWeight: 'bold',
          color: 'red',
          fontSize:12
        }}>{this.state.formMessage}</span>}
        <br/>

        <button  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={this.addCos}> סיום הרשמה</button>
        {this.state.showPopup ? 
          <PopUpCos
            header=' הרשמתך נקלטה במערכת '
            text=' נבדוק את מספר העסק שלך ותוכלי להתחיל לטפל בלקוחות בעוד כ24 שעות'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}
export default SignUpCos;
