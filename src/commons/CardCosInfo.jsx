import React from 'react'
import ButtonLogIn from './ButtonLogIn';
import { Link } from 'react-router-dom';

const CardCosInfo = (props) => {
  const {cos} = props

  const saveCosId=()=>{

    console.log(cos.cosmetologist_id)
    localStorage.setItem('cosmetologist_id',cos.cosmetologist_id);

  }


  return (
    <div className="card"   style={{backgroundColor:'#EEE4C4', width:'10rem',height:'22rem',margin:5,marginRight:20,float:"right",border: '#FFDE6B solid 2px',borderRadius:10}} >
    <img className="card-img-top" src={require("../assets/images/choosecos.png")} alt="display image" width="100" height="100"  ></img>   
    <div className="card-body">
       <h4 className="card-title" style={{color:"#B5651D",}}> {cos.cosmetic_businessName}</h4>
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >כתובת </h3> 
       <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >{cos.cosmetic_address} </p> 
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >עיר </h3>
       <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} > {cos.cosmetic_city}  </p> 
       <input type='checkbox' style={{width:20,height:50}} onChange={saveCosId}></input>
    
    </div>
    </div>
    
   );
  }
   export default CardCosInfo;