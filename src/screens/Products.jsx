import React, { Component } from 'react'
import CardProduct from '../commons/CardProduct'
import { Link } from 'react-router-dom'


 class Products extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       products:[],
    }
  }

  componentDidMount(){
  
    const  apiUrl= 'http://localhost:58031/api/Products/status';

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
          debugger
          console.log("fetch btnFetchGetProducts= ", result);
          result.map(st => console.log(st.prod_id));
          console.log('result[0].prod_id', result[0].prod_id);
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
        <Link to='/coshomepage'>
          <img style={{position:'absolute',left:5,top:0}}alt="wrinkles" height="100" width="100" src={require("../assets/images/home2.png")}/>
       </Link>
       
       <h4 style={{marginTop:35}}>מאגר מוצרי טיפוח </h4>

      <div >
       {this.state.products.map((products) => <CardProduct  key={products.prod_id} products={products}/>)}
      </div>
     
      </div>
    )
  }
}
export default Products;
