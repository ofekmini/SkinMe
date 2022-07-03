import React, { Component } from "react";
import Logo from '../commons/Logo';
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from "react-router-dom";


class WelcomeSkinMe extends Component {


    render() {
        return (
        <div>
         <Logo/>
         <br/>
         <h2 style={{color:"black"}}>ברוכים הבאים</h2>
         <h3 style={{color:"gray"}}>כניסה</h3>

        <Link to="/LogInUser">
        <ButtonLogIn  style={{backgroundColor:"black",color:"white",fontSize:15 ,width:'60%',height:40,borderColor:"#e8e8e8" ,margin:20, borderWidth:1,borderRadius:50}} name=" משתמש "/>
        </Link>

        <Link to="/LogInCos">
        <ButtonLogIn  style={{backgroundColor:"black",color:"white",fontSize:15,width:'60%',height:40,borderColor:"#e8e8e8" ,margin:20, borderWidth:1,borderRadius:50}} name=" קוסמטיקאית "/>
        </Link>
        
        <br/>
        <h3 style={{color:"gray", fontSize:15}}>?משתמש לא קיים</h3>
        <Link to="/chooseuser">
        <ButtonLogIn style={{margin:10,fontSize:20,border:'none',color:'#bc8f8f',textDecorationLine: 'underline'}} name=" הרשמה לאפליקציה"/> 
        </Link>
        </div>
        );
    }
}

export default WelcomeSkinMe;