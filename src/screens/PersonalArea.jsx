import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import MycosCard from '../commons/MycosCard';
import CosmeticHomePage from './CosmeticHomePage';

function PersonalArea() {

  const [file, setFile] = useState();
  const [user_skinType, setuser_skinType] = useState("")
  const [mycos, setMyCos] = useState("")
  const [user, setUser] = useState({})
  const [user_route, setUser_Route] = useState("")

  const id = localStorage.getItem('appUser_id')


  /**useEffect(()=>{
     const apiUrl=`http://localhost:58031/api/getskintype/?id=${id}`; 

     const fetchData=async()=>{
       try{
         const res= await fetch(apiUrl);
         const json=await res.json();
         console.log(res);
         setuser_skinType(res);
       
       }
       catch(error){
         console.log("error",error)
       }
     };
     fetchData();
     

   },[]);**/

  useEffect(() => {
    if (localStorage.getItem('user_skinType') === "שומני") {
      setuser_skinType("סוג העור שלי הוא שומני");
    } else if (localStorage.getItem('user_skinType') === "יבש") {
      setuser_skinType("סוג העור שלי הוא יבש");
    }
    else {
      setuser_skinType("סוג העור שלי הוא מעורב");
    }

    if (localStorage.getItem('user_route') == 2 || localStorage.getItem('user_route') == 1 ) {
      setUser_Route(true);
    } 
    else {
      setUser_Route(false);
    }



     fetch(`http://localhost:58031/api/User/Mycos/?id=${id}`)
    .then(response => response.json())
   .then(data => setMyCos(data))

    fetch(`http://localhost:58031/api/Users/${id}`)
      .then(response => response.json())
     
      .then(data => {
        setUser(data)
      })
  }, [])

  const handleSubmission = async (event) => {
    
    const apiUrl = `http://localhost:58031/api/Users/profileImage/${id}`;

    

    const res = await fetch(apiUrl, {
      method: 'PUT', headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      }), body: JSON.stringify({ picture: file })
    })
    let user=await res.json()
    setUser(user)
  }

  async function handleChange(e) {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setFile(base64);
  }

  function convertToBase64(file){
     return new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload=()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror=(error)=>{
        reject(error)
      }
     })
  }

  return (
    <div className="App">
      <Link to='/userhomepage'>
      <img style={{position:'absolute',left:5,top:0}}alt="home" height="100" width="100" src={require("../assets/images/home2.png")}/>
      </Link>
      <h4 style={{ marginTop: 35 }}>אזור אישי </h4> <hr />

      <div style={{ backgroundColor: 'beige', margin: 10 }}>
        <img style={{ width: 100, height: 100, borderRadius: 50 }} src={user.picture} /> <br /><br />
        <h3 style={{ color: '#c4a092', margin: 0 }}> {user_skinType} </h3>

       <Link to='/userimages'>
        <button style={{ margin: 15, backgroundColor: "black", color: "white", fontSize: 15, width: '40%', height: 30, borderColor: "black", borderWidth: 1, borderRadius: 50 }}  >מעקב תמונות</button>
        </Link>
      </div>
      <div style={{ backgroundColor: 'beige', margin: 10 }}>
      {user_route?(
          
          <MycosCard cos={mycos} /> 
        ):(
          <Link to='/maslulinfo'>
          <button style={{ margin: 50, backgroundColor: "#c4a092", color: "white", fontSize: 20, width: '50%', height: 40, borderColor: "black", borderWidth: 1, borderRadius:10 }}  >הצטרפות למסלול  </button>
          </Link>

        )}
        
      </div>


      <div style={{ backgroundColor: 'beige', margin: 10, marginTop:50 }}>
        <h3 style={{ color: 'black', fontSize: 18 }}>שינוי תמונת פרופיל </h3>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={file} /> <br /><br />
        <input style={{ marginLeft: 70 }} type="file" accept="image/*" onChange={handleChange} />  <br /><br />
        <button style={{ margin: 15, backgroundColor: "black", color: "white", fontSize: 15, width: '40%', height: 30, borderColor: "black", borderWidth: 1, borderRadius: 50 }} onClick={handleSubmission} >שמור תמונת פרופיל</button> <br />
      </div>

    </div>

  )
}
export default PersonalArea;

