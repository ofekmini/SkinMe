import React, {useState }  from  'react';
import { Link } from 'react-router-dom';
import './Rating.css'

const RatingProducts = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  return (
    <div className="card"  style={{backgroundColor:'#EEE4C4', width:'16rem',height:'30rem',marginTop:130, marginRight:70, float:"right",border:'#c4a092 solid 2px',borderRadius:10}} >
      
      <img  alt="prod" height="100" width="100" src={require("../assets/images/addprod.png")}/> 
    <div className="card-body">
      <div >
          
          <h6 className="card-title" style={{fontSize:14}} > ?עד כמה אהבת אותי</h6>

      </div>
      

    <div className="star-rating"  >
      {[...Array(5)].map((star, index) => {
        index += 1;
        console.log(rating)
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
           
          >
            <span className="star" >&#9733;</span>
          </button>
        );
      })}
    </div>
    <br/>
    
    <h6 style={{fontSize:14,margin:0}}>תיאור </h6>
    <br/>
       <textarea rows={5} cols={25}>

        
       </textarea>
       <br/>
       <br/>
       <br/>
       <Link to='/userhomepage'>
    <button  style={{backgroundColor:"black",marginRight:10,   color:"white",fontSize:14,width:'20%',height:25,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}> חזור </button>
    </Link>
    <button  style={{backgroundColor:"#c4a092",color:"white",fontSize:14,width:'60%',height:25,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}> שמור </button>

    </div>
    </div>
  );
};

export default RatingProducts