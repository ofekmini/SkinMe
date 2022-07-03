import React from 'react'


const MycosCard = (props) => {
  const {cos} = props

  const saveCosId=()=>{

    console.log(cos.cosmetologist_id)
    localStorage.setItem('cosmetologist_id',cos.cosmetologist_id);

  }


  return (
    <div className="card" style={{backgroundColor:'white', width:'15rem',height:'12rem',margin:10,marginRight:70,float:"right",border: 'gray solid 1px'}} >
    <h4 style={{color:'black' ,marginTop:0}}>הקוסמטיקאית שלי </h4>
    <div className="card-body">
       <h4 className="card-title" style={{color:"#c5a092",}}> {cos.cosmetic_businessName}  </h4>
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} > כתובת: {cos.cosmetic_address} </h3> 
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >עיר: {cos.cosmetic_city}  </h3> <br/><br/>
       <button style={{margin:0,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'50%',height:60,borderColor:"black",borderWidth:1}} onChange={saveCosId}> דירוג קוסמטיקאית</button>
    
    </div>
    </div>
    
   );
  }
   export default MycosCard;