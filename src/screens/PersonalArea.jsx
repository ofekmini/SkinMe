import React ,{useState,useEffect} from 'react'

 function PersonalArea() {

    const [file, setFile] = useState();
    const [user_skinType,setuser_skinType]=useState("")
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

    const handleSubmission = () => {
      const apiUrl=`http://localhost:58031/api/Users/profileImage/?id=${2}`; 

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
    <div className="App" style={{marginTop:100}}>
    
    <img style={{width:100, height: 100 , borderRadius:50}} src={file} /> <br/><br/>
    <input style={{marginLeft:70}} type="file"  accept="image/*"onChange={handleChange} />  <br/><br/>
    <button style={{margin:15,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'40%',height:30,borderColor:"black",borderWidth:1,borderRadius:50}} onClick={handleSubmission} >שמור תמונת פרופיל</button>

    <h1 style={{color:"black"}}>{user_skinType.value}</h1>

  </div>

  )
 }
export default PersonalArea;

