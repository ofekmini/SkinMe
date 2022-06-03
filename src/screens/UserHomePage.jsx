import React, { Component } from 'react'
import RoutineProductsDay from '../commons/RoutineProductsDay';
import RoutineProductsNight from '../commons/RoutineProductsNight';

class UserHomePage extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      
      
      productsday:[],
      productsnight:[],
      user_skinType:localStorage.getItem('user_skinType')
      
       
    }
  }


   dayProducts(){
    
    const  apiUrlDay= 'http://localhost:58031/api/Products/byskintypeday/';
    


    const skintype={

      user_skinType:this.state.user_skinType,
    } 

    
    
     
    fetch(apiUrlDay , {
      method: 'Post',
      body: JSON.stringify(skintype),
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
          result.map(st => console.log(st.prod_id));
          console.log(result.user_skinType);
          console.log(this.state);
         this.setState({ productsday: [...result]});
          
        },

        (error) => {
          console.log("err post=", error);
        })

     } 

     nightProducts(){
    
      
      const  apiUrlNight= 'http://localhost:58031/api/Products/byskintypenight/';
  
  
      const skintype={
  
        user_skinType:this.state.user_skinType,
      } 
  
      
      
       
      fetch(apiUrlNight , {
        method: 'Post',
        body: JSON.stringify(skintype),
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
            result.map(st => console.log(st.prod_id));
            console.log(result.user_skinType);
            console.log(this.state);
           this.setState({ productsnight: [...result]});
            
          },
  
          (error) => {
            console.log("err post=", error);
          })
  
       } 

       componentDidMount(){
         this.dayProducts();
         this.nightProducts();
       }
   
 
 
  render() {
    return (
      <div>
        
     <h2 style={{fontFamily:'cursive',color:'#c4a092',paddingTop:50}} >שיגרת הטיפוח שלי</h2>
     <img style={{paddingLeft:200}} alt="day" height="100" width="100" src={require("../assets/images/day.png")}/>
      
     {this.state.productsday.map((productsday) => <RoutineProductsDay  key={productsday.prod_id} productsday={productsday} />)} 

     <img style={{paddingLeft:200 ,margin:20}} alt="moon" height="30" width="30" src={require("../assets/images/moon.png")}/>

     {this.state.productsnight.map((productsnight) => <RoutineProductsNight  key={productsnight.prod_id} productsnight={productsnight} />)} 
 
    

        </div>
    )
  }
}


export default UserHomePage;
