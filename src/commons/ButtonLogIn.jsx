import React from 'react'
//   <button style={props.style} onClick={()=>{props.onClick(props.product)}}>
const ButtonLogIn=(props) =>{
  return (
    <div>
      
     <button style={props.style} onClick={props.product}>
       {props.name}
     </button>
      
    
    </div>
  )
}
export default ButtonLogIn;
