import React, { Component } from 'react'
import CardProduct from '../commons/CardProduct'


 class Products extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       products:[],
     
       
    }
  }

  componentDidMount()  {
  
    console.clear();
    
    const  apiUrl= 'https://localhost:44326/api/products';
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
          
          console.log("fetch btnFetchGetProducts= ", result);
          result.map(st => console.log(st.prod_name));
          console.log('result[0].prod_name=', result[0].prod_name);
          this.setState({ products: [...result]}
            
            );
         
        },
        (error) => {
          console.log("err post=", error);
        })

      }
  render() {
    return (
      <div >
     
<div >
{this.state.products.map((products) => <CardProduct key={products.prod_id} products={products}/>)}
      </div>
     
      </div>
    )
  }
}
export default Products;
