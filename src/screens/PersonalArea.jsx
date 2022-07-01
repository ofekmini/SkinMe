import React ,{useState,useEffect} from 'react'

 function PersonalArea() {

    const [file, setFile] = useState();
    const [skintype,SetSkintype]=useState("")
    const id=localStorage.setItem('appUser_id')

    useEffect(()=>{
      const apiUrl=`http://localhost:58031/api/getskintype/?id=${id}`; 

      const fetchData=async()=>{
        try{
          const res= await fetch(apiUrl);
          const json=await res.json();
          console.log(json);
          SetSkintype(json.skintype)
        
        }
        catch(error){
          console.log("error",error)
        }
      };
      fetchData();
      

    },[]);

   

    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className="App">
    
    <img style={{width:100, height: 100 , borderRadius:50}} src={file} /> <br/><br/>
    <input style={{marginLeft:70}} type="file" onChange={handleChange} />  <br/><br/>
    <button style={{margin:15,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'40%',height:30,borderColor:"black",borderWidth:1,borderRadius:50}} >שמור תמונת פרופיל</button>
    <p>{skintype}</p>

  </div>

  )
}
export default PersonalArea;

