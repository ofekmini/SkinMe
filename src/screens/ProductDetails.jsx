import React, { Component } from 'react';
import CardInfoProd from '../commons/CardInfoProd';

export default class ProductDetails extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      
      product:[],
      prod_id:localStorage.getItem('prod_id')
      
       
    }
  }

  componentDidMount= ()=>{

   console.clear();

  const  apiUrl= 'http://localhost:58031/api/Products/showproddetails/';
    


  const productid={

    prod_id:this.state.prod_id,
  } 

  
  
   
  fetch(apiUrl , {
    method: 'Post',
    body: JSON.stringify(productid ),
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
        console.log("fetch POST= ", result);
        //result.map(st => console.log(st.prod_id));
        console.log(result.prod_id);
        console.log(this.state);
        this.setState({ product: [...result]});
        
      },

      (error) => {
        console.log("err post=", error);
      })

   } 
  

  render() {
    return (
      <div>
        
        <CardInfoProd  key={this.state.prod_id} product={this.state.product} />
        

      </div>
    )
  }
}
