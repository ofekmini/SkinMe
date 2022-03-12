import React, { Component } from 'react'

class LogInUser extends Component {

  state={

    username:'',
    password:'',
    
}

// Get with login details 




  render() {
    return (
      <div>

        <InputUser value={this.user_userName} name="user_userName" type="text" label="שם משתמש " placeholder="שם משתמש " onChange={(e)=>{this.setState({user_userName:e.target.value})}}/>

        <InputUser value={this.user_password} name="user_password" type="password" label="סיסמה  " placeholder="סיסמה " onChange={(e)=>{this.setState({user_password:e.target.value})}}/>

      </div>
    )
  }
}

export default LogInUser;
