import React from 'react'


const MycosCard = (props) => {
  const {cos} = props

  const saveCosId=()=>{

    console.log(cos.cosmetologist_id)
    localStorage.setItem('cosmetologist_id',cos.cosmetologist_id);

  }


  return (
    <div className="card"   style={{backgroundColor:'#EEE4C4', width:'18rem',height:'20rem',margin:5,marginRight:20,float:"right",border: '#FFDE6B solid 2px',borderRadius:10}} >
    
    <div className="card-body">
       <h4 className="card-title" style={{color:"black",}}> {cos.cosmetic_businessName}: שם העסק</h4>
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >כתובת </h3> 
       <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >{cos.cosmetic_address} </p> 
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >עיר </h3>
       <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} > {cos.cosmetic_city}  </p> 
       <button style={{width:20,height:50}} onChange={saveCosId}> דירוג קוסמטיקאית</button>
    
    </div>
    </div>
    
   );
  }
   export default MycosCard;