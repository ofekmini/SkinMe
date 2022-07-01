import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css'

export default props => {

  let type = localStorage.getItem("type");
    
  if (type=='0') {
    return (
      <Menu right >
        <a className="menu-item" href="/userhomepage" >
          דף הבית
        </a>
        <a className="menu-item" href="/salads">
          אזור אישי
        </a>
        <a className="menu-item" href="/maslulinfo">
          מסלולים
        </a>
        <a className="menu-item" href="/searchcos">
          חיפוש קוסמטיקאית
        </a>
        <a className="menu-item" href="/settingsuser">
          הגדרות
        </a>
        <a className="menu-item" href="/">
          התנתק
        </a>
      </Menu>
    );
  }
  else 
  {
    return (
      <Menu right >
        <a className="menu-item" href="/coshomepage" >
          דף הבית
        </a>
        <a className="menu-item" href="/waiting">
          הלקוחות שלי
        </a>
        <a className="menu-item" href="/waiting">
          ממתינים לחוות דעת
        </a>
        <a className="menu-item" href="/addproduct">
          מוצרי טיפוח
        </a>
        <a className="menu-item" href="/settingscos">
          הגדרות
        </a>
        <a className="menu-item" href="/">
          התנתק
        </a>
        
        
      </Menu>
    );
  }
  
};