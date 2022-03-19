import React from 'react'

const ButtonLogIn=(props) =>{
  return (
    <div>
      
     <button style={props.style} onClick={props.onClick}>
       {props.name}
     </button>
      
      
    </div>
  )
}
export default ButtonLogIn;
