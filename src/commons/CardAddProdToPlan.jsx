import React from 'react'
import ButtonLogIn from './ButtonLogIn';
import { Link } from 'react-router-dom';

const CardAddProdToPlan = (props) => {
  const {products} = props

  return (
    <div className="card"   style={{backgroundColor:'#EEE4C4', width:'10rem',height:'17rem',margin:5,marginRight:20,float:"right",border: '#FFDE6B solid 2px',borderRadius:10}} >
    <img className="card-img-top" src={require("../assets/images/addprod.png")} alt="display image" width="100" height="100"  ></img>   
    <div className="card-body">
      <div><h4 className="card-title" style={{color:"#B5651D",}}> {products.prod_name}</h4></div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_company} </h3> </div>
      <ButtonLogIn  
      style={{backgroundColor:"#c4a092",color:"white",fontSize:14,width:'50%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} 
      name="הוספה " onClick={props.add} product={products}/>

    
    </div>
    </div>
    
   );
  }
   export default CardAddProdToPlan;