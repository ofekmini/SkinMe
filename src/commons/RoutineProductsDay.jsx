import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLogIn from './ButtonLogIn'


const RoutineProductsDay = (props) => {
 
  const {productsday} = props

   const showId =()=>{
     console.log(productsday.prod_id);
     localStorage.setItem('prod_id',productsday.prod_id);

   }

  return (
    <div className="card"  style={{backgroundColor:'#EEE4C4', width:'10rem',height:'17rem',margin:5,marginRight:20,float:"right",border: '#FFDE6B solid 2px',borderRadius:10}} >
    <div className="card-body">
      <div  style={{margin:0}}>
          
          <h6 className="card-title" style={{color:"#AA9084", fontSize:15}}> {productsday.prod_name} <br/> {productsday.prod_company}</h6>
          <h6 className="card-title" style={{color:"black",fontSize:12,margin:0}}> הוראות שימוש</h6>
           <p className="card-text" style={{color:"black",fontSize:12,textAlign:'center'}} > {productsday.prod_description} </p> 
         
          
          
      </div>
      <Link to="/ratingp">
      <button  style={{backgroundColor:"#c4a092",color:"white",fontSize:14,width:'60%',height:25,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={showId}>דירוג מוצר</button>
      </Link>
    </div>
   
    </div>
    
   );
  }
   export default RoutineProductsDay;