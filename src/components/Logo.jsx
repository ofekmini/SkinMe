import React from 'react';
import Logo from '../assets/images/logo.png';

const SkinmeLogo= () =>{
  return (
    <div>
      <img
         src={Logo}
         width="150"
         height="150"
       />
      <p style={{color:"gray",fontSize:20}}> עור פנים מושלם בלי לצאת מהבית </p>

    </div>
  )
}


export default SkinmeLogo;
