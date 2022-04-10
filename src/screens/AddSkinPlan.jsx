import React, { Component } from 'react'
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import CardAddProdToPlan from '../commons/CardAddProdToPlan';






let local = false;
//const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/test2/tar1/api/';
    const apiUrl='https://localhost:44326/api/cos';
//if (local) {
 // apiUrl = 'https://localhost:44326/api/LogIn/register';
//}

 class AddSkinPlan extends Component {


  constructor(props) {
    super(props)
    
    this.state={
 
      plan_name:"",
      notes:"",

      products:[]



    


   }
  }

 

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      
      
    })
  }

  componentDidMount(){
  
    const  apiUrl= 'https://localhost:44326/api/Products/status';

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
          result.map(st => console.log(st.prod_id));
          console.log('result[0].prod_id', result[0].prod_id);
          this.setState({ products: [...result]}
            
            );
         
        },
        (error) => {
          console.log("err post=", error);
        })

      }

 

  addSkinPlan = (e)=>{
    console.clear();
    e.preventDefault()
    
    
   
    const newskinplan={
        
      plan_name:this.state.plan_name,
      notes:this.state.notes
        
      
    };
    
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(newskinplan),
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
          console.log(result.plan_name);
          console.log(this.state);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }
 
  render() {

    return (

      <div style={{paddingTop:100}}>

  
        <img alt="prod" height="150" width="150" src={require("../assets/images/skinplan.png")}/>
        
        <InputUser value={this.plan_name} name="plan_name" type="text" label=" שם התוכנית  " placeholder="שם התוכנית   " onChange={(e)=>{this.setState({plan_name:e.target.value})}}/>
        <InputUser value={this.notes} name="notes" type="text" label="  הערות   " placeholder="הערות   " onChange={(e)=>{this.setState({notes:e.target.value})}}/><br/>
        
       
        <div >
       {this.state.products.map((products) => <CardAddProdToPlan  key={products.prod_id} products={products}/>)}
      </div>
       
        <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="שמור " onClick={this.addSkinPlan}/>
        
      </div>
    )
  }
}
export default AddSkinPlan;
