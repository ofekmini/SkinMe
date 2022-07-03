import React ,{useState,useEffect} from 'react';
import Logo from '../assets/images/logo.png';
import MycosCard from '../commons/MycosCard';
import CosmeticHomePage from './CosmeticHomePage';

 function PersonalArea() {

    const [file, setFile] = useState();
    const [user_skinType,setuser_skinType]=useState("")
    const [mycos,setMyCos]=useState("")

    const id=localStorage.getItem('appUser_id')
    

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

    useEffect(()=>{
      if(localStorage.getItem('user_skinType')==="שומני"){
        setuser_skinType("סוג העור שלי הוא שומני");
      }else if(localStorage.getItem('user_skinType')==="יבש"){
        setuser_skinType("סוג העור שלי הוא יבש");
      }
      else{
        setuser_skinType("סוג העור שלי הוא מעורב");
      }

      fetch(`http://localhost:58031/api/User/Mycos/?id=${id}`)
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setMyCos(data))
    },[])

    const handleSubmission = () => {
      const apiUrl=`http://localhost:58031/api/Users/profileImage/?id=${id}`; 

      const formData = new FormData();
  
      formData.append('File', file);
  
      fetch(
       apiUrl,
        {
          method: 'PUT',
         
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    

   

    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className="App">
    <h4 style={{marginTop:35}}>אזור אישי </h4> <hr/>
    <div style={{border:'#c4a092 solid 1px' ,margin:30}}>
    <img style={{width:50, height: 50 , borderRadius:50}} src={file} /> <br/><br/>
    <input style={{marginLeft:70}} type="file"  accept="image/*"onChange={handleChange} />  <br/><br/>
    <button style={{margin:15,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'40%',height:30,borderColor:"black",borderWidth:1,borderRadius:50}} onClick={handleSubmission} >שמור תמונת פרופיל</button> <br/>
    </div>

    <img style={{width:100, height: 100 , borderRadius:50}} src={file} /> <br/><br/>
     <h3 style={{color:'#c4a092'}}> {user_skinType} </h3>

     <button style={{margin:15,backgroundColor:"black",color:"white",fontSize:15,width:'40%',height:30,borderColor:"black",borderWidth:1,borderRadius:50}}  >מעקב תמונות</button> 

     <h3 style={{color:'black'}}>הקוסמטיקאית שלי </h3>
     <MycosCard cos={mycos}/>

  </div>

  )
 }
export default PersonalArea;

