import React, { Component } from 'react'
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import Logo from '../commons/Logo';
import PopUpCos from '../commons/PopUpCos';

let local = false;
//const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/test2/tar1/api/';
    const apiUrl='https://localhost:44326/api/LogIn/register';
//if (local) {
 // apiUrl = 'https://localhost:44326/api/LogIn/register';
//}

 class SignUpCos extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      user_firstName:"",
      user_lastName:"", 
      username:"",
      user_password:"",
      user_email:"",
      user_gender:"",
      cosmetic_businessName:"",
      cosmetic_address:"",
      cosmetic_city:"",
      cosmetic_license_num:"",
      cosmetic_status:"Pending",
      user_role:"Cosmetologist",
      showPopup: false,
         
  }
}

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     
      
    })
  }
  addCos = (e)=>{
    console.clear();
    e.preventDefault()
    
    
    this.togglePopup(); 

    const cos_data={
      user_firstName:this.state.user_firstName,
      user_lastName:this.state.user_lastName, 
      username:this.state.username,
      user_password:this.state.user_password,
      user_gender:this.state.user_gender,
      user_email:this.state.user_email,
      cosmetic_businessName:this.state.cosmetic_businessName,
      cosmetic_address:this.state.cosmetic_address,
      cosmetic_city:this.state.cosmetic_city,
      cosmetic_license_num:this.state.cosmetic_license_num,
      cosmetic_phone_num:this.cosmetic_phone_num,
      cosmetic_status:this.state.cosmetic_status,
      user_role:this.state.user_role
        
      
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

      <Logo/>

        <InputUser value={this.user_firstName} name="user_firstName" type="text" label="שם פרטי " placeholder="שם פרטי " onChange={(e)=>{this.setState({user_firstName:e.target.value})}}/>

        <InputUser value={this.user_lastName} name="user_lastName" type="text" label="שם משפחה   " placeholder="שם משפחה " onChange={(e)=>{this.setState({user_lastName:e.target.value})}}/>  

        <InputUser value={this.user_email} name="user_email" type="text" label="מייל " placeholder="מייל"  onChange={(e)=>{this.setState({user_email:e.target.value})}}/>
        

        <label className='label' >
        <input type="radio" name="user_gender" value="F"   onChange={(e)=>{this.setState({user_gender:e.target.value})}}/>
        <img alt="wrinkles" height="100" width="100" src={require("../assets/images/girl.png")}/>
        
        </label>
        <label className='label'>
          
        <input type="radio" name="user_gender" value="M"   onChange={(e)=>{this.setState({user_gender:e.target.value})}}/>
        <img alt="wrinkles" height="100" width="100" src={require("../assets/images/boy.png")}/><br/>
        
        </label>
        
        <InputUser value={this.cosmetic_businessName} name="cosmetic_businessName" type="text" label=" שם העסק " placeholder=" שם העסק " onChange={(e)=>{this.setState({cosmetic_businessName:e.target.value})}}/>

        <InputUser value={this.cosmetic_city} name="cosmetic_city" type="text" label="עיר" placeholder="עיר " onChange={(e)=>{this.setState({cosmetic_city:e.target.value})}}/>  

        <InputUser value={this.cosmetic_address} name="cosmetic_address" type="text" label="כתובת " placeholder="כתובת"  onChange={(e)=>{this.setState({cosmetic_address:e.target.value})}}/>
        
        <InputUser value={this.cosmetic_license_num} name="cosmetic_license_num" type="text" label="מספר עסק " placeholder="מספר עסק"  onChange={(e)=>{this.setState({cosmetic_license_num:e.target.value})}}/>
        
        <InputUser value={this.cosmetic_phone_num} name="cosmetic_phone_num" type="text" label="מספר טלפון " placeholder="מספר טלפון"  onChange={(e)=>{this.setState({cosmetic_phone_num:e.target.value})}}/>

        <InputUser value={this.username} name="username" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e)=>{this.setState({username:e.target.value})}}/>

        <InputUser value={this.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>

        <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="סיום הרשמה" onClick={this.addCos}/>
        {this.state.showPopup ? 
          <PopUpCos
            header=' תודה רבה על ההרשמה '
            text=' נבדוק את המספר העסק שלך ותוכלי להתחיל לטפל בלקוחות בעוד כ24 שעות'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}
export default SignUpCos;
