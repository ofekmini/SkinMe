import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import MasterForm from './MasterForm';
import SignUpUser from './SignUpUser';




export default class FacebookLogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      isSocialMedia: false,
      userID: "",
      name: "",
      email: "",
      picture: "",



    }
  };

  responseFacebook = async (response) => {
    // const apiUrl = 'http://localhost:58031/api/LogIn/register';
    // const body={
    //   'username': response.name,
    //   'email': response.email,
    //   'picture': response.picture.data.url
    // }
    // debugger
    // let res=await fetch(apiUrl , {
    //   method: 'Post',
    //   body: JSON.stringify(body),
    //   headers: new Headers({
    //     'Content-Type': 'application/json; charset=UTF-8',
    //     'Accept': 'application/json; charset=UTF-8',
    //   })
    // })
    debugger
    this.props.handleChange(response.email, response.name, response.picture.data.url)
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
          <h3 style={{ color: "black", fontSize: 20 }}>Welcome {this.state.name}</h3>

        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin style={{ background: '#2980b9' }}

          appId="229777149335447"
          autoLoad={false}
          fields="name,email,picture,gender"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
        />

      );
    }



    return <div>{fbContent}</div>;
  }
}