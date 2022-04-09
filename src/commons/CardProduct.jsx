import React from 'react'

const CardProduct = (props) => {
  const {products} = props



  return (
    <div className="card"  style={{ width:'18rem',margin:50,float:"left",border: 'white dotted 2px'}} >
    <img className="card-img-top" src="https://w1.pngwing.com/pngs/950/218/png-transparent-flower-plant-cosmetics-cream-face-cartoon-skin-care-lipstick-cosmetology.png" alt="display image" width="200" height="200"  ></img>   
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