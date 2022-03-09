import React from 'react'

const ButtonLogIn=(props) =>{
  return (
    <div>
      
     <button type="submit" style={props.style} onClick={props.click}>
       {props.button}
     </button>
      
      
    </div>
  )
}
export default ButtonLogIn;
