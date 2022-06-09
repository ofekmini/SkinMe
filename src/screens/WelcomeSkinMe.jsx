import React, { Component } from "react";
import Logo from '../commons/Logo';
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from "react-router-dom";


class WelcomeSkinMe extends Component {


    render() {
        return (
        <div>
         <Logo/>
         <h2 style={{color:"black"}}>שלום לך</h2>
         <p style={{color:"gray"}}>האם את/ה</p>

         
        <Link to="/LogInUser">
        <ButtonLogIn style={{margin:15,backgroundColor:"white",color:"black",fontSize:15,width:'40%',height:30,borderColor:"black",borderWidth:1,borderRadius:50}} name="משתמש" />
        </Link>

        <Link to="/LogInCos">
        <ButtonLogIn style={{margin:15,backgroundColor:"white",color:"black",fontSize:15,width:'40%',height:30,borderColor:"black",borderWidth:1,borderRadius:50}} name="קוסמטיקאית" />
        </Link>

        <Link to="/chooseuser">
        <ButtonLogIn style={{margin:40,fontSize:20,backgroundColor:'#f8fbff',border:'none',color:'#bc8f8f',textDecorationLine: 'underline'}} name=" הרשמה לאפליקציה"/> 
        </Link>
        </div>
        );
    }
}

export default WelcomeSkinMe;