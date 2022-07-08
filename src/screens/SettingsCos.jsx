import React, { Component } from 'react'
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';
import PopUpSettingsCos from '../commons/PopUpSettingsCos';

class SettingsCos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cosmetologist_user_password: "",
      cosmetologist_id: localStorage.getItem('cosmetologist_id'),
      cosmetologist_email: "",
      cosmetologist_phoneNumber:"",

      showPopup: false,
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  UpdatePassword = () => {
    console.clear();
    const apiUrl = `http://localhost:58031/api/login/UpdateCosPassword?id=${this.state.cosmetologist_id}`;
    this.togglePopup(); 
  
    const pass = {
      cosmetologist_user_password: this.state.cosmetologist_user_password
    };

    fetch(apiUrl, {
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
          console.log("fetch btnFetchUpdateCosPassword= ", result);
          console.log('result.cosmetologist_id=', result.cosmetologist_id);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  UpdateEmail = () => {
    console.clear();
    const apiUrl = `http://localhost:58031/api/login/UpdateCosEmail?id=${this.state.cosmetologist_id}`;
    this.togglePopup(); 
  
    const pass = {
      cosmetologist_email: this.state.cosmetologist_email
    };

    fetch(apiUrl, {
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
          console.log("fetch btnFetchUpdateCosEmail ", result);
          console.log('result.cosmetologist_email=', result.cosmetologist_id);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

 
  UpdatePhone = () => {
    console.clear();
    const apiUrl = `http://localhost:58031/api/login/UpdateCosPhone?id=${this.state.cosmetologist_id}`;
    this.togglePopup(); 
  
    const pass = {
      cosmetologist_phoneNumber: this.state.cosmetologist_phoneNumber,
    };

    fetch(apiUrl, {
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
          console.log("fetch btnFetchUpdateCosPhone", result);
          console.log('result.cosmetologist_phoneNumber=', result.cosmetologist_phoneNumber);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }





  render() {
    return (
      <div >
        <Link to='/coshomepage'>
          <img style={{position:'absolute',left:5,top:0}}alt="wrinkles" height="100" width="100" src={require("../assets/images/home2.png")}/>
        </Link>

        <h4 style={{ marginTop: 35}}> הגדרות </h4>

        <div style={{ margin: 60, border: '2px solid black', borderRadius: 30 }}>
          <h5 style={{ marginTop: 10 }}> שינוי סיסמה  </h5>
          <InputUser value={this.user_password} name="user_password" type="text" label=" הזן סיסמה חדשה  " placeholder="הזן סיסמה   " onChange={(e) => { this.setState({ cosmetologist_user_password: e.target.value })}} />
          <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}  onClick={this.UpdatePassword}>שמור</button>
          {this.state.showPopup ? 
          <PopUpSettingsCos
            header='  שינוי נקלט'
            text='  השינוי נקלט במערכת בהצלחה '
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>

        <div style={{ margin: 60, border: '2px solid black', borderRadius: 30 }}>
          <h5 style={{ marginTop: 10 }}> שינוי כתובת מייל  </h5>
          <InputUser value={this.cosmetologist_email} name="cosmetologist_email" type="text" label=" הזן כתובת מייל חדשה  " placeholder="הזן כתובת מייל  " onChange={(e) => { this.setState({ cosmetologist_email: e.target.value })}} />
          <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={this.UpdateEmail}>שמור</button>
          {this.state.showPopup ? 
          <PopUpSettingsCos
            header='  שינוי נקלט'
            text='  השינוי נקלט במערכת בהצלחה '
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>

        <div style={{ margin: 60, border: '2px solid black', borderRadius: 30 }}>
          <h5 style={{ marginTop: 10 }}> שינוי מספר טלפון  </h5>
          <InputUser value={this.cosmetologist_phoneNumber} name="cosmetologist_phoneNumber" type="text" label=" מספר טלפון  " placeholder="הזן מספר טלפון חדש " onChange={(e) => { this.setState({ cosmetologist_phoneNumber: e.target.value })}}/>
          <button style={{ margin: 30, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}  onClick={this.UpdatePhone}>שמור</button>
          {this.state.showPopup ? 
          <PopUpSettingsCos
            header='  שינוי נקלט'
            text='  השינוי נקלט במערכת בהצלחה '
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>
      </div>
    )
  }
}

export default SettingsCos;
