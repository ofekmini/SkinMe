import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'; 

class LogInFacebook extends Component {
   constructor(props){
     super(props)
       this.state={

       }
     }
     signup=(res) =>{  
      const responseFacebook = {  
        Name: res.name,  
        email: res.email,  
        token: res.accessToken,  
        Image: res.picture.data.url,  
        ProviderId: 'Facebook'  
    
      }  
    }


  render() {
    const responseFacebook = (response) => {  
      console.log(response);  
      var res = response.profileObj;  
      console.log(res);   
      this.signup(response);
      }
    return (
      <div>
        
        <FacebookLogin buttonStyle={{padding:"6px"}}  
                             appId="229777149335447"  
                             autoLoad={true}  
                             fields="name,email,picture"  
                             callback={responseFacebook}
                             icon="fa-facebook"/> 
        
      </div>
    )
  }
}
export default LogInFacebook;