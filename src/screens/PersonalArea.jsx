import React ,{useState} from 'react'

 function PersonalArea() {

    const [file, setFile] = useState();

    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className="App">
    <h2>Add Image:</h2>
    <input type="file" onChange={handleChange} /><br/><br/>
    <img style={{width:150, height: 150 }} src={file} />

  </div>

  )
}
export default PersonalArea;

