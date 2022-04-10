import React from 'react'
import ButtonLogIn from './ButtonLogIn';
import { Link } from 'react-router-dom';

const CardAddProdToPlan = (props) => {
  const {products} = props



  return (
    <div className="card"  style={{ width:'18rem',margin:50,float:"left",border: 'white dotted 2px'}} >
    <img className="card-img-top" src={require("../assets/images/addprod.png")} alt="display image" width="100" height="100"  ></img>   
    <div className="card-body">
      <div><h4 className="card-title" style={{color:"#B5651D",}}> {products.prod_name}</h4></div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_company} </h3> </div>
      <ButtonLogIn  
      style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'20%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} 
      name="הוספה " />

    
    </div>
    </div>
    
   );
  }
   export default CardAddProdToPlan;