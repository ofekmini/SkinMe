import React from 'react'
import ButtonLogIn from './ButtonLogIn';
import { Link } from 'react-router-dom';

const CardProduct = (props) => {
  const {products} = props



  return (
    <div className="card"  style={{ width:'18rem',margin:50,float:"left",border: 'white dotted 2px'}} >
    <img className="card-img-top" src={require("../assets/images/addprod.png")} alt="display image" width="100" height="100"  ></img>   
    <div className="card-body">
      <div><h4 className="card-title" style={{color:"#B5651D",}}> {products.prod_name}</h4></div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_company} </h3> </div>
      <div><h4 className="card-title" style={{color:"#B5651D",}}> הוראות שימוש</h4></div>
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_description} </p> </div>
      <div><h4 className="card-title" style={{color:"#B5651D",}}> מומלץ</h4></div>
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_manual} </p> </div>

    
    </div>
    </div>
    
   );
  }
   export default CardProduct;