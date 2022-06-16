import React, { Component } from 'react'
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';

 class SettingsUser extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       
      user_password:"",

      appUser_id: localStorage.getItem('appUser_id')
  
       
    }
  }

  UpdatePassword = () => {
    console.clear();
   const apiUrl = `https://localhost:44326/api/login/UpdatePassword?id=${this.state.appUser_id}`;
  
    const pass = { 
     
     user_password:this.state.user_password
    };
  
    fetch(apiUrl , {
      method: 'PUT',
      body: JSON.stringify(pass),
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
        console.log("fetch btnFetchUpdatePassword= ", result);
         console.log('result.appUser_id=', result.appUser_id);
        },
        (error) => {
          console.log("err post=", error);
        });
  
    console.log('END');
  }




  render() {
    return (
      <div >
        
        <h4 style={{marginTop:30}}> הגדרות </h4>

        <div style={{margin:60, border:'2px solid black',borderRadius:30}}>

        <h5 style={{marginTop:10}}> שינוי סיסמה  </h5>
        
        <InputUser value={this.user_password} name="user_password" type="text" label=" הזין סיסמה חדשה  " placeholder="סיסמה חדשה    " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>
        
        <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="שמור  " onClick={this.UpdatePassword}/>
        </div>
        
     </div>
    )
  }
}

export default SettingsUser;
