import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import MycosCard from '../commons/MycosCard';

 class Profile extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       picture:"",
       appUser_id:localStorage.getItem('appUser_id'),
       cos:[],
       cosmetologist_id:""

  
       
    }
  }

  componentDidMount(){
  
    const  apiUrl= `http://localhost:58031/api/User/Mycos/?id=${this.state.appUser_id}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          
          console.log("fetch btnFetchGetcos= ", result);
          //result.map(st => console.log(st.cosmetologist_id));
          console.log('result[0].prod_id', result[0].cosmetologist_id);
          this.setState({ cos: [...result],}  
           );
           localStorage.setItem("cosmetologist_id",result)
         
        },
        (error) => {
          console.log("err post=", error);
        })

      }

    


  onFileChange = event => {
    
    // Update the state
    this.setState({ picture: event.target.files[0] });
  
  };

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     
      
    })
  }

  onFileUpload = (e)=> {
    console.clear();
    e.preventDefault()
    const apiUrl = `http://localhost:58031/api/Users/Image/?id=${this.state.appUser_id}`;

    const user_data={
        
      picture:this.state.picture,

    };

    fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(user_data),
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.imgId);
          console.log(this.state);
          
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }
  
  render() {
    return (
      <div style={{marginTop:200}}>
        
          <input type="file" onChange={this.onFileChange} /><br/><br/>
          <button  style={{backgroundColor:"#c4a092",color:"white",fontSize:14,width:'60%',height:25,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={this.onFileUpload}> שמור תמונת פרופיל </button>

          <h1>{this.state.cos}</h1>

          
      </div>
    )
  }
}
export default Profile;
