import React, { Component } from 'react'
import RoutineProductsDay from '../commons/RoutineProductsDay';
import RoutineProductsNight from '../commons/RoutineProductsNight';

import Logo from '../commons/Logo';
import CardProduct from '../commons/CardProduct';



class UserHomePage extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      productsday:[],
      productsnight:[],
      user_skinType:localStorage.getItem('user_skinType'),
      plan_id:localStorage.getItem('plan_id'),
      appUser_id:localStorage.getItem('appUser_id'),
      products:[],
      
      
       
    }
  }

  ProductsDay(){
  const  apiUrl= `http://localhost:58031/api/Products/GetProdForAutoPlanDay/?id=${this.state.appUser_id}`;

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
        result.map(st => console.log(st.plan_id));
        console.log('result[0].prod_id', result[0].plan_id);
        this.setState({ productsday: [...result]}
          
          );
       
      },
      (error) => {
        console.log("err post=", error);
      })

    }

    ProductsNight(){
      const  apiUrl= `http://localhost:58031/api/Products/GetProdForAutoPlanNight/?id=${this.state.appUser_id}`;
    
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
            result.map(st => console.log(st.plan_id));
            console.log('result[0].prod_id', result[0].plan_id);
            this.setState({ productsnight: [...result]}
              
              );
           
          },
          (error) => {
            console.log("err post=", error);
          })
    
        }

       componentDidMount(){
          this.ProductsDay();
          this.ProductsNight();
       }
 
 
  render() {
    return (
      <div >
  
     <img alt="logo" height="120" width="120"  src={require("../assets/images/logo.png")} />
     <h2 style={{color:'#c4a092'}} >שגרת הטיפוח שלי</h2>
     <div >
      
      <h2 style={{color:'#FFAB00', backgroundColor:'beige'}}>בוקר</h2>
     {this.state.productsday.map((productsday) => <RoutineProductsDay  key={productsday.prod_id} productsday={productsday} />)} <br/>
     </div>

   <div style={{marginTop:600}}>
   
     <h2 style={{color:'#607D8B',backgroundColor:'beige'}}>ערב</h2>
     {this.state.productsnight.map((productsnight) => <RoutineProductsNight  key={productsnight.prod_id} productsnight={productsnight} />)} 
   </div>
    

        </div>
    )
  }
}


export default UserHomePage;
