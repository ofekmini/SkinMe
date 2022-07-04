import React , { useState, useEffect }from 'react'

 function UserImages() {

  const [file, setFile] = useState();
  const [img, setImg] = useState({})

  const id = localStorage.getItem('appUser_id')

  useEffect(() => {
   
    
    fetch(`http://localhost:58031/api/Users/images/${id}`)
      .then(response => response.json())
     
      .then(data => {
        setImg(data)
      })
      
  }, [])


  const handleSubmission = async (event) => {
    
    const apiUrl = `http://localhost:58031/api/Users/images`;
    
    const currDate = new Date().toLocaleDateString();

    const res = await fetch(apiUrl, {
      method: 'POST', headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      }), body: JSON.stringify({  imgUrl: file ,
                                  appUser_id:id ,
                                  upload_date:currDate
                              })
    })
    let img=await res.json()
    setImg(img)
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
    <div>
      <h4 style={{ marginTop: 35 }}>מעקב תמונות  </h4> <hr />

      <div style={{ backgroundColor: 'beige', margin: 10 }}>
        <h3 style={{ color: 'black', fontSize: 18 }}>  הוספת תמונה </h3>
        <img style={{ width: 50, height: 50, borderRadius: 50 }} src={file} /> <br /><br />
        <input style={{ marginLeft: 70 }} type="file" accept="image/*" onChange={handleChange} />  <br /><br />
        <button style={{ margin: 15, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '40%', height: 30, borderColor: "black", borderWidth: 1, borderRadius: 50 }} onClick={handleSubmission} >שמור  </button> <br />
      </div>

      <div style={{ backgroundColor: 'beige', margin: 10 }}>
        <img style={{ width: 100, height: 100, borderRadius: 50 }} src={img.imgUrl} /> <br /><br />
      </div>

     

    </div>
  )
}
export default UserImages;
