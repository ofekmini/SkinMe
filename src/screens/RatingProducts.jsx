import React, {useState }  from  'react';
import { Link,useNavigate  } from 'react-router-dom';
import './Rating.css'

var pageStyle = {
  height: '100vh',
   backgroundColor:'beige'
}

const RatingProducts = () => {
  

  let navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const id = localStorage.getItem('prod_id')

  const handleSubmission = async (event) => {
    
    const apiUrl = `http://localhost:58031/api/Products/RateProd/${id}`;

    

    const res = await fetch(apiUrl, {
      method: 'PUT', headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      }), body: JSON.stringify({ prod_sumRate: rating })
    })
    let rate=await res.json()
    setRating(rate)
    navigate('/userhomepage')
  }

  return (

    <div style={pageStyle}>
   
    <div className="card"  style={{backgroundColor:'#EEE4C4', width:'16rem',height:'25rem',marginTop:200, marginRight:70, float:"right",border:'#c4a092 solid 2px',borderRadius:10}} >
      
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
    
    <button  style={{backgroundColor:"#c4a092",color:"white",fontSize:16,width:'70%',height:30,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={handleSubmission}> שמור </button><br/> <br/>
  
  
    <Link to='/userhomepage'>
    <button  style={{backgroundColor:"black",marginRight:10,   color:"white",fontSize:14,width:'30%',height:25,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}> חזור </button>
    </Link>

    </div>
    </div>
    </div>
    
  );
};

export default RatingProducts