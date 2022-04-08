import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.development';
import Logo from '../commons/Logo';

class CosmeticHomePage extends Component {
        constructor(props) {
          super(props)
          this.state={
            user_firstName:"",
            user_lastName:"", 
            user_gender:"",
            username:"",
            user_password:"",
            user_email:"",
            user_birth:"",
            user_profileImg:"",
            user_processImg:"",
            user_skinType:"",
         }
        }
        handlechange = (e) => {
          this.setState({
            [e.target.name]: e.target.value,
            user_birth:e,
            
          })
        }
        addUser = (e)=>{
          console.clear();
          e.preventDefault()
          const apiUrl = 'https://localhost:44326/api/LogIn';
          
          const user_data={
              
              user_firstName:this.state.user_firstName,
              user_lastName:this.state.user_lastName, 
              user_gender:this.state.user_gender,
              username:this.state.username,
              user_password:this.state.user_password,
              user_email:this.state.user_email,
              user_birth:this.state.user_birth,
              user_profileImg:this.state.user_profileImg,
              user_processImg:this.state.user_processImg,
              user_skinType:this.state.user_skinType,
              user_skinProblem:this.state.user_skinProblem,
              user_cheek:this.state.user_cheek,
              user_Tzone:this.state.user_Tzone,
              user_sunExposure:this.state.user_sunExposure,
              user_stress:this.state.user_stress,
          };
          
          fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(user_data),
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
      
render () {
return (
    <div>
<Logo/>

<text style={{color:'#c4a092'}}>הלקוחות שלי</text><br/>

<label className='label'>
<img alt="pigmentation" height="100" width="100" src={require("../assets/images/pigmentationname.png")}/>
<br>
    </br>
    <text name="costumer">שם המשתמש</text>
</label>

<br>
</br>
<text style={{color:'#c4a092'}}> ממתינים לחוות דעת</text><br/>


</div>
)
}
}
export default CosmeticHomePage;
