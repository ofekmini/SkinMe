import React from 'react'


const InputUser=(props) =>{
  return (
    <div >

   
      <h3 style={{color:"black",margin:10,paddingRight:30,fontSize:15,textAlign:"right"}}>{props.label}</h3>
      <input 
      type={props.type}
      value={props.value} 
      onChange={props.changedText} 
      placeholder={props.placeholder} style={{textAlign:'right',backgroundColor:"white", width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}
      />


  </div>
  )
}

export default InputUser;
