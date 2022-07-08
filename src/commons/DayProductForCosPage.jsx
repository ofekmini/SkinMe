import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLogIn from './ButtonLogIn'


const DayProductForCosPage = (props) => {
 
  const {productsday} = props


  return (
    <div className="card"  style={{backgroundColor:'#EEE4C4', width:'10rem',height:'17rem',margin:5,marginRight:20,float:"right",border: 'white solid 2px',borderRadius:10}}>
    <div className="card-body">
      <div >
          
          <h6 className="card-title" style={{color:"black", fontSize:13}}> {productsday.prod_name}  </h6>
          <h6 className="card-title" style={{color:"#c4a092", fontSize:12}}> {productsday.prod_company} </h6>
          <h6 className="card-title" style={{color:"black", fontSize:12}}> {productsday.prod_type} </h6>
          <h6 className="card-title" style={{color:"black",fontSize:12,margin:0}}> הוראות שימוש</h6>
          <p className="card-text" style={{color:"black",fontSize:12,textAlign:'center'}} > {productsday.prod_description} </p>
           
      </div>
     
    </div>
   
    </div>
    
   );
  }
   export default DayProductForCosPage;