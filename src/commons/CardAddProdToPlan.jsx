import React from 'react'
import ButtonLogIn from './ButtonLogIn';
import { Link } from 'react-router-dom';

const CardAddProdToPlan = (props) => {
  const { products } = props

  const showId =()=>{
    console.log(products.prod_id);
    localStorage.setItem('prod_id',products.prod_id);
    

  }

  return (
    <div className="card" style={{ backgroundColor: '#EEE4C4', width: '10rem', height: '15rem', margin:15, float: "right",  border: '#FFDE6B solid 2px', borderRadius: 10 }} >
      <img className="card-img-top" src={require("../assets/images/addprod.png")} alt="display image" height="20%"  ></img>
      <div className="card-body" style={{height:'80%'}}>
        
        <div style={{heigth:'10%'}}>
          <h4 className="card-title" style={{ color: "#B5651D", }}> {products.prod_name}</h4>
        </div>

        <div style={{heigth:'10%'}}>
          <p className="card-text" style={{ color: "black", fontSize: 15, textAlign: 'center' }} > {products.prod_company} </p>
        </div>
        <h1 className="card-text" style={{color:"#B5651D",fontSize:12,textAlign:'center',margin:0}} > דירוג: 5/{products.prod_rate} </h1> 


        <button
          style={{ backgroundColor: "#c4a092", color: "white", fontSize: 14, width: '50%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}
           onClick={()=>props.onClick(products)}>הוספה</button>


      </div>
    </div>

  );
}
export default CardAddProdToPlan;