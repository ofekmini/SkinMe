import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useNavigate } from 'react-router-dom';
import './Menu.css'

export default props => {
  let navigate = useNavigate()
  const logOut = () => {
    localStorage.clear();
    navigate('/')

  }

  let type = localStorage.getItem("type");

  if (type == '0') {
    return (
      <Menu right >
        <a className="menu-item" onClick={() => { navigate("/userhomepage") }}>
          דף הבית
        </a>
        <a className="menu-item" onClick={() => { navigate("/persoarea") }}>
          אזור אישי
        </a>
        <a className="menu-item" onClick={() => { navigate("/maslulinfo") }}>
          מסלולים
        </a>
        <a className="menu-item" onClick={() => { navigate("/searchcos") }}>
          חיפוש קוסמטיקאית
        </a>
        <a className="menu-item" onClick={() => { navigate("/settingsuser") }}>
          הגדרות
        </a>
        <a className="menu-item" onClick={logOut}>
          התנתק
        </a>
      </Menu>
    );
  }
  else {
    return (
      <Menu right >
        <a className="menu-item" onClick={() => { navigate("/coshomepage") }}>
          דף הבית
        </a>
        <a className="menu-item" onClick={() => { navigate("/mycustomers") }}>
          הלקוחות שלי
        </a>
        <a className="menu-item" onClick={() => { navigate("/waiting") }}>
          ממתינים לחוות דעת
        </a>
        <a className="menu-item" onClick={() => { navigate("/products") }}>
          מוצרי טיפוח
        </a>
        <a className="menu-item" onClick={() => { navigate("/settingscos") }}>
          הגדרות
        </a>
        <a className="menu-item" onClick={logOut}>
          התנתק
        </a>


      </Menu>
    );
  }

};