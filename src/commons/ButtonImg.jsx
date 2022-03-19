import React from 'react'

const ButtonImg=(props)=> {
  return (
    <div>
       <h5 style={{color:"black"}}>{props.question}</h5>
       <button >
                <img height="15px" width="15px" src={props.src} />
                {props.text}
       </button>

    </div>
  )
}

export default ButtonImg;
