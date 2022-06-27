import React, {useEffect, useState }  from 'react'


const UserCard = (props) => {
  const {users} = props
  const[maslul,setmaslul]=useState();

  useEffect(()=>{
    if(users.user_route==1){
      setmaslul(true);
    }else{
      setmaslul(false);
    }
  },[])

  return (
    <div className="card"   style={{backgroundColor:'#EEE4C4', width:'10rem',height:'18rem',margin:5,marginRight:20,float:"right",border: '#c4a092 solid 2px',borderRadius:10}} >
    <img className="card-img-top" src={require("../assets/images/defaultclient.png")} alt="display image" width="70" height="70"  ></img>   
    <div className="card-body">
      <div><h5 className="card-title" style={{color:"#c4a092",}}> פרטי לקוח</h5></div>
      
      <div><h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}}> {users.first_name}   {users.last_name}</h3></div>
      <div>
      {maslul?(
          <h6 style={{color:'black',fontSize:13,fontFamily:'sans-serif'}}>  מסלול ייעוץ חד פעמי</h6>

        ):(
          <h3 style={{color:'black',fontSize:13,fontFamily:'sans-serif'}}>  מסלול ליווי</h3>

        )}
      </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:11,textAlign:'center'}} > {users.email}  </h3> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:12,textAlign:'center'}} >  {users.user_gender}  :מגדר </h3> </div>
      

      
      

    </div>
    </div>
    
   );
  }
   export default UserCard;