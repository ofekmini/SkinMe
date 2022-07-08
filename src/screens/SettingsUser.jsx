import React, { Component } from 'react'
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';
import PopUpCos from '../commons/PopUpCos';
import PopUpUser from '../commons/PopUpUser';

 class SettingsUser extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       
      user_password:"",
      email: "",
      username:"",

      appUser_id: localStorage.getItem('appUser_id'),

      showPopup: false,
  
       
    }
  }

  
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
      
    });
  }


  UpdatePassword = () => {
    console.clear();
   const apiUrl = `https://localhost:44326/api/login/UpdatePassword?id=${this.state.appUser_id}`;

   this.togglePopup(); 
  
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

  UpdateMail= () => {
    console.clear();
   const apiUrl = `https://localhost:44326/api/login/UpdateUserEmail?id=${this.state.appUser_id}`;
   this.togglePopup(); 
  
    const mail = { 
     
     email:this.state.email
    };
  
    fetch(apiUrl , {
      method: 'PUT',
      body: JSON.stringify(mail),
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

  UpdateUsername= () => {
    console.clear();
   const apiUrl = `https://localhost:44326/api/login/UpdateUserUsername?id=${this.state.appUser_id}`;
   this.togglePopup(); 
  
    const username = { 
     
     username:this.state.username
    };
  
    fetch(apiUrl , {
      method: 'PUT',
      body: JSON.stringify(username),
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
         <Link to='/userhomepage'>
        <img style={{position:'absolute',left:5,top:0}}alt="wrinkles" height="100" width="100" src={require("../assets/images/home2.png")}/>
        </Link>
        <h4 style={{marginTop:35}}> הגדרות </h4>  <hr/>

        <div style={{margin:60, border:'2px solid black',borderRadius:30}}>

        <h5 style={{marginTop:10}}> שינוי סיסמה  </h5>
        
        <InputUser value={this.user_password} name="user_password" type="text" label=" הזן סיסמה חדשה  " placeholder="סיסמה חדשה    " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>
        
        <button  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}  onClick={this.UpdatePassword}>שמור</button>
        {this.state.showPopup ? 
          <PopUpUser
            header='  שינוי נקלט'
            text='השינוי נקלט בהצלחה'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>

        <div style={{margin:60, border:'2px solid black',borderRadius:30}}>

        <h5 style={{marginTop:10}}> שינוי מייל  </h5>
        
        <InputUser value={this.email} name="email" type="text" label="הזן מייל חדש  " placeholder=" מייל חדש    " onChange={(e)=>{this.setState({email:e.target.value})}}/>
        
        <button  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}  onClick={this.UpdateMail}>שמור</button>
        {this.state.showPopup ? 
          <PopUpUser
            header='  שינוי נקלט'
            text='השינוי נקלט בהצלחה'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>

        <div style={{margin:60, border:'2px solid black',borderRadius:30}}>

        <h5 style={{marginTop:10}}> שינוי שם משתמש  </h5>
        
        <InputUser value={this.username} name="username" type="text" label="הזן שם משתמש חדש   " placeholder=" שם משתמש     " onChange={(e)=>{this.setState({username:e.target.value})}}/>
        
        <button  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}  onClick={this.UpdateUsername}>שמור</button>
        {this.state.showPopup ? 
          <PopUpUser
            header='  שינוי נקלט'
            text='השינוי נקלט בהצלחה'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>
        
     </div>
    )
  }
}

export default SettingsUser;
