import React, { Component } from 'react'
import CardProduct from '../commons/CardProduct';
import RoutineProducts from '../commons/RoutineProducts';

class UserHomePage extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      
      
      products:[],
  
       
    }
  }

  componentDidMount(){

    const  apiUrl= 'http://localhost:58031/api/Products/oilyskin/';

    fetch(apiUrl , {
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
      <div>
        
     <h2 style={{fontFamily:'cursive',color:'#c4a092',paddingTop:50}} >שיגרת הטיפוח שלי</h2>
     <img style={{paddingLeft:200}} alt="day" height="100" width="100" src={require("../assets/images/day.png")}/>
      
     {this.state.products.map((products) => <RoutineProducts  key={products.prod_id} products={products}/>)} 

     <img style={{paddingLeft:200 ,margin:20}} alt="moon" height="30" width="30" src={require("../assets/images/moon.png")}/>
        
     {this.state.products.map((products) => <RoutineProducts  key={products.prod_id} products={products}/>)}

        </div>
    )
  }
}


export default UserHomePage;
