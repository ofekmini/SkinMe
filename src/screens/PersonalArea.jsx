import React ,{useState} from 'react'

 function PersonalArea() {

    const [file, setFile] = useState();

    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className="App">
    <h3 style={{marginTop:100}}>תמונת פרופיל</h3>
    <img style={{width:100, height: 100 , borderRadius:50}} src={file} /> <br/><br/>
    <input style={{marginLeft:70}}type="file" onChange={handleChange} />  <br/><br/>
    <button style={{margin:15,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'40%',height:30,borderColor:"black",borderWidth:1,borderRadius:50}} >שמור תמונת פרופיל</button>
    

  </div>

  )
}
export default PersonalArea;

