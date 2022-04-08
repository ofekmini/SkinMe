import React from 'react'

const CardProduct = (props) => {
  const {products} = props

  return (
    <div className="card"  style={{ width:'8rem',margin:10,float:"right",paddingRight:20}} >
   
    <div className="card-body">
      <div><h4 className="card-title" style={{color:"#B5651D",}}> הוראות שימוש</h4></div>
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_description} </p> </div>
      <div><h4 className="card-title" style={{color:"#B5651D",}}> מומלץ</h4></div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_manual} </h3> </div>
     
      <button style={{
           backgroundColor: "#edc9af",
           border: "#edc9af",
           color: "white",
           padding: 10,
           textalign: "center",
           textdecoration: "none",
           display: "inline-block",
           fontsize: 50,
           margin: 4,
           borderRadius:50
           }}   > חזרה </button>
    </div>
    </div>
    
   );
  }
   export default CardProduct;