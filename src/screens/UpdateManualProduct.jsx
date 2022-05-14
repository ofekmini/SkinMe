import React, { Component } from 'react'
import InputUser from '../commons/InputUser'
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';
import Products from './Products';


class UpdateManualProduct extends Component {

  constructor(props) {
    super(props)
    
  this.state={

    prod_name:'',
    prod_manual:'',
    prod_company:''

    
}
  }

handlechange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
    
   
    
  })
}
UpdateProd = () => {
  console.clear();
 const apiUrl = `https://localhost:44326/api/Products/update?name=${this.state.prod_name}&company=${this.state.prod_company}`;

  const pass = { 
   
   prod_manual:this.state.prod_manual
  };

  fetch(apiUrl , {
    method: 'PUT',
    body: JSON.stringify(pass),
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
      console.log("fetch btnFetchUpdateManual= ", result);
       console.log('result.prod_name=', result.prod_name);
      },
      (error) => {
        console.log("err post=", error);
      });

  console.log('END');
}





  render() {
    return (
      <div style={{paddingTop:100}}>
        
        <img alt="prod" height="150" width="150" src={require("../assets/images/addprod.png")}/>
        <h2 style={{color:"black"}}> שינוי המלצות</h2>
        
        <InputUser value={this.prod_name} name="prod_name" type="text" label=" שם המוצר  " placeholder="שם המוצר  " onChange={(e)=>{this.setState({prod_name:e.target.value})}}/>
        <InputUser value={this.prod_company} name="prod_company" type="text" label=" שם החברה   " placeholder="שם החברה  " onChange={(e)=>{this.setState({prod_company:e.target.value})}}/><br/>
        <InputUser value={this.prod_manual} name="prod_manual" type="text" label="המלצות  " placeholder="המלצות  " onChange={(e)=>{this.setState({prod_manual:e.target.value})}}/>
        
       
        
        <Link to='/products'>
        <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="שמור  " onClick={this.UpdateProd}/>
        </Link>


      </div>
    )
  }
}

export default UpdateManualProduct;
