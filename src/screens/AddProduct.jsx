import React, { Component } from 'react'
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import PopupAddprod from '../commons/PopUpAddprod';




let local = false;
//const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/test2/tar1/api/';
    const apiUrl='https://localhost:44326/api/Products/Create';
//if (local) {
 // apiUrl = 'https://localhost:44326/api/LogIn/register';
//}

 class AddProduct extends Component {


  constructor(props) {
    super(props)
    
    this.state={
 
      prod_name:"",
      prod_type:"",
      prod_company:"",
      prod_description:"",
      prod_manual:"",
      prod_status:"Pending",



    


   }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      
      
    })
  }

 

  addProd = (e)=>{
    console.clear();
    e.preventDefault()
    
    
    this.togglePopup(); 

    const newprod={
        
      prod_name:this.state.prod_name,
      prod_type:this.state.prod_type,
      prod_company:this.state.prod_company,
      prod_description:this.state.prod_description,
      prod_manual:this.state.prod_manual,
      prod_status:this.state.prod_status
        
      
    };
    
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(newprod),
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
          console.log(result.prod_name);
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

  
        <img alt="prod" height="150" width="150" src={require("../assets/images/addprod.png")}/>
        
        <InputUser value={this.prod_name} name="prod_name" type="text" label=" שם המוצר  " placeholder="שם המוצר  " onChange={(e)=>{this.setState({prod_name:e.target.value})}}/>
        <InputUser value={this.prod_company} name="prod_company" type="text" label=" שם החברה   " placeholder="שם החברה  " onChange={(e)=>{this.setState({prod_company:e.target.value})}}/><br/>
        <label style={{color:"black",margin:5,fontSize:15}}>   סוג המוצר  </label> <br/>
        
        <select  name="prod_type" onChange={this.handlechange}>
           <option value="סרום" >סרום</option>
           <option value="קרם לילה">קרם לילה  </option>
           <option  value="קרם יום" >קרם יום</option>
           <option value="קרם הגנה " >קרם הגנה </option>
           <option value="סבון  " >סבון</option>
        </select>
    
        <InputUser value={this.prod_description} name="prod_description" type="textarea"  label="הוראות שימוש   " placeholder="הוראות שימוש " onChange={(e)=>{this.setState({prod_description:e.target.value})}}/>
        <InputUser value={this.prod_manual} name="prod_manual" type="textarea" label=" המלצות" placeholder="המלצות   " onChange={(e)=>{this.setState({prod_manual:e.target.value})}}/><br/>
       
        <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="שמור " onClick={this.addProd}/>
        {this.state.showPopup ? 
          <PopupAddprod
            header=' המוצר נוסף בהצלחה     '
            text=' נבדוק את פרטי המוצר ותוכלי להשתמש בה בעוד כ24 שעות'
            closePopup={this.togglePopup.bind(this)} 
          />
          : null
        }
      </div>
    )
  }
}
export default AddProduct;