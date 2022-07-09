import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {IoLogoWhatsapp} from 'react-icons/io'


const MycosCard = (props) => {
  
  const {cos} = props
  const user_route = localStorage.getItem('user_route')
  //let navigate=useNavigate();

  const saveCosId=()=>{

    console.log(cos.cosmetologist_id)
    localStorage.setItem('cosmetologist_id',cos.cosmetologist_id);
   // navigate('/ratingcos');
  }


  return (
    <div className="card" style={{backgroundColor:'beige', width:'21rem',height:'13rem',margin:10,textAlign:'center'}} >
    <h4 style={{color:'black' ,fontSize:20,marginTop:0,textAlign:'center'}}>הקוסמטיקאית שלי </h4>
    <div className="card-body">
       <h4 className="card-title" style={{color:"#c5a092",textAlign:'center'}}> {cos.cosmetic_businessName}  </h4>
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} > כתובת:   {cos.cosmetic_address} </h3> 
       <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center',margin:0}} >עיר:   {cos.cosmetic_city}  </h3> <br/>
      {user_route === '2' && <a target={'_blank'} style={{fontSize: '2rem',padding:50,color:'#32CD32'}} href={`https://wa.me/${cos.cosmetologist_phoneNumber}`}><IoLogoWhatsapp/></a>}

       <Link to="/ratingcos">
       <button style={{backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:30,borderColor:"black",borderWidth:1}} onChange={saveCosId}> דירוג קוסמטיקאית</button>
       </Link>
    </div>
    </div>
    
   );
  }
   export default MycosCard;