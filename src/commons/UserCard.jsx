import React from 'react'
import CosmeticHomePage from '../screens/CosmeticHomePage';

const UserCard = (props) => {
  const {users} = props

  return (
    <div className="card"  style={{ width:'15rem',margin:50,float:"left",border: 'black dotted 2px'}} >
    <img className="card-img-top" src="./assets/images/addprod.png" alt="display image" width="100%" height="100"  ></img>   
    <div className="card-body">
      <div><h4 className="card-title" style={{color:"black",}}> {products.prod_name}</h4></div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_company} </h3> </div>
      <div><h4 className="card-title" style={{color:"#c4a092",}}> הוראות שימוש</h4></div>
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_description} </p> </div>
      <div><h4 className="card-title" style={{color:"#c4a092",}}> מומלץ</h4></div>
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > {products.prod_manual} </p> </div>
      <button style={{
           backgroundColor: "pink",
           border: "solid brown 2px ",
           color: "brown",
           padding: 10,
           textalign: "center",
           textdecoration: "none",
           display: "inline-block",
           fontsize: 50,
           margin: 4,
           }}  > מחיקה </button>
            <button style={{
           backgroundColor: "pink",
           border: "solid brown 2px ",
           color: "brown",
           padding: 10,
           textalign: "center",
           textdecoration: "none",
           display: "inline-block",
           fontsize: 50,
           margin: 4,
           }}  > עדכון </button>
    </div>
    </div>
    
   );
  }
   export default UserCard;