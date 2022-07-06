import React, { Component } from 'react';
import './Popup.css'
import { Link } from 'react-router-dom';

 class PopUpSettingsCos extends Component {
  render() {
    return (
      <div className='popup'>
      <div className='popup_inner'>
        <h3 >{this.props.header}</h3>
        <p >{this.props.text}</p> 
      <Link to='/settingscos'>
      <button  style={{backgroundColor:"white",color:"black",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}onClick={this.props.closePopup}>סגור</button>
      </Link>
      </div>
    </div>
    )
  }
}

export default PopUpSettingsCos;
