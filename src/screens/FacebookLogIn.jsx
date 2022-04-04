import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'; 
import MasterForm from './MasterForm';
import SignUpUser from './SignUpUser';




export default class FacebookLogIn extends Component {
  constructor(props) {
    super(props)
   
  this.state = {
    isLoggedIn: false,
    isSocialMedia:false,
    userID: "",
    name: "",
    email: "",
    picture: "",


  }
};

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      isSocialMedia: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    

    });
  };

  componentClicked = () => console.log("clicked");

  render() {
   

      
    let fbContent;
 
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f8fbff",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h3 style={{color:"black",fontSize:20}}>Welcome {this.state.name}</h3>
          

          <SignUpUser/>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin style={{background: '#2980b9'}}
          
          appId="229777149335447"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
        />
        
      );
    }
  


    return <div>{fbContent}</div>;
  }
}