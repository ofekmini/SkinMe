import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup } from 'react-bootstrap';
import ButtonLogIn from '../commons/ButtonLogIn';



class BasicQuestionnaire extends Component {

  constructor(props){
    
    super(props)
    

    this.state={
      user_skinProblem:"",
      user_cheek:"",
      user_Tzone:"",
      user_sunExposure:"",
      user_stress:"",
      bgcolor:""

    }

  }
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  changecolor=(e)=>{
    this.setState({
      bgcolor:'#efdecd',
      
    })
    
  }
 
  

  render() {
    



    return (
      <div>

        <text style={{color:"black",fontSize:16,marginRight:20}}>?מה היא בעיית העור העיקרית  שתרצי לטפל בה</text>
       
      <ButtonGroup>
       
       <button  style={{borderRadius:'50%',backgroundColor:this.state.bgcolor,border:'gray',margin:10}} name='user_skinProblem' value= 'קמטים' onClick={this.changecolor}   onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}> 
             
                <img alt='wrinkles' style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/wrinkles.png')}/>
             
       </button>
      

       <button style={{borderRadius:'50%',border:'gray',backgroundColor:this.state.bgcolor,margin:10}} name='user_skinProblem' value= 'אקנה'  onClick={this.changecolor}  onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}>
               <img alt='acne' style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/acne.png')}/> 
                   
       </button>

       <button style={{borderRadius:'50%',border:'gray',backgroundColor:this.state.bgcolor,margin:10}} name='user_skinProblem' value= 'פיגמנטציה' onClick={this.changecolor}   onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}>
               <img alt='pigmentation' style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/pigmentationname.png')}/> 
                   
       </button>
       
       </ButtonGroup>

       <ButtonGroup>
       
       <button  style={{borderRadius:'50%',border:'gray',margin:10,backgroundColor:this.state.bgcolor}} name='user_skinProblem' value= 'יובש'  onClick={this.changecolor}   onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}>
                <img alt='dryskin' style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/dryskin.png')}/>
                  
       </button>
       

       <button style={{borderRadius:'50%',border:'gray',margin:10,backgroundColor:this.state.bgcolor}} name='user_skinProblem' value= 'שומן'  onClick={this.changecolor}   onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}>
               <img alt='oily' style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/oily.png')}/> 
                   
       </button>
       
       <button style={{borderRadius:'50%',border:'gray',margin:10,backgroundColor:this.state.bgcolor}} name='user_skinProblem' value= 'נקבוביות'  onClick={this.changecolor}   onChange={(e)=>{this.setState({user_skinProblem:e.target.value})}}>
               <img alt='pore' style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/pores.png')}/> 
                   
       </button>
       
       </ButtonGroup><br/>

       <text style={{color:"black",textAlign:'center',fontSize:16}}>?איך הלחיים שלך מרגישים</text>
       
       <ButtonGroup>
       
       <button  style={{border:'gray',margin:10}} name='user_cheek,' value= 'יבשות' onClick={(e)=>{this.setState({user_cheek:e.target.value})}}> יבשות  </button>
       <button style={{border:'gray',margin:10}} name='user_cheek,' value= 'נינוחות' onClick={(e)=>{this.setState({user_cheek:e.target.value})}}> נינוחות</button>
       <button style={{border:'gray',margin:10}}name='user_cheek,' value= 'שומניות' onClick={(e)=>{this.setState({user_cheek:e.target.value})}}> שומניות</button>
       
       </ButtonGroup><br/>

       <text style={{color:"black",textAlign:'center',fontSize:16}}> ? שלך מרגיש Tאיך האזור ה </text>
       <ButtonGroup>
       
       <button  style={{border:'gray',margin:10}} name='user_Tzone' value= 'יבשות' onClick={(e)=>{this.setState({user_Tzone:e.target.value})}}> יבשות  </button>
       <button style={{border:'gray',margin:10}} name='user_Tzone' value= 'נינוחות' onClick={(e)=>{this.setState({user_Tzone:e.target.value})}}>נינוחות</button>
       <button style={{border:'gray',margin:10}}name='user_Tzone' value= 'שומניות' onClick={(e)=>{this.setState({user_Tzone:e.target.value})}}>  שומניות</button>
       
       </ButtonGroup><br/>

       <text style={{color:"black",textAlign:'center',fontSize:16}}>  ? כמות החשיפה שלך בשמש בממוצע  </text>
       <ButtonGroup>
       
  
       <button  style={{border:'gray',margin:20,backgroundColor:'#f8fbff'}} name='user_sunExposure' value= 'פחות שמש ' onClick={(e)=>{this.setState({user_sunExposure:e.target.value})}}> 
       <img alt='sunny'style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/sunny.png')}/>
       </button>
       <button  style={{border:'gray',margin:10,backgroundColor:'#f8fbff',paddingRight:100}} name='user_sunExposure' value= 'המון שמש ' onClick={(e)=>{this.setState({user_sunExposure:e.target.value})}}> 
       <img alt='verysunny' style={{alignItems:'center'}}height="50" width="50" src={require('../assets/images/verysunny.png')}/>
       </button>
       </ButtonGroup><br/>

       <text style={{color:"black",textAlign:'center',fontSize:16}}>  ?רמת המתח בה את נמצאת </text>
       <ButtonGroup >
       
       <button  style={{border:'gray',padding:15,margin:2,borderRadius:'50%',fontSize:16}} name='user_stress' value= 'גבוהה  ' onClick={(e)=>{this.setState({user_stress:e.target.value})}}> גבוהה  </button>
       <button style={{border:'gray',padding:15,margin:2,borderRadius:'50%',fontSize:16}} name='user_stress' value= 'בינונית  ' onClick={(e)=>{this.setState({user_stress:e.target.value})}}> בינונית </button>
       <button style={{border:'gray',padding:15,margin:2,borderRadius:'50%',fontSize:16}}name='user_stress' value= 'נמוכה  ' onClick={(e)=>{this.setState({user_stress:e.target.value})}}>  נמוכה</button>
       <button style={{border:'gray',padding:15,margin:2,borderRadius:'50%',fontSize:16}}name='user_stress' value= 'ללא  ' onClick={(e)=>{this.setState({user_stress:e.target.value})}}>  ללא</button>
       
       </ButtonGroup><br/>


       <ButtonLogIn  style={{margin:30,backgroundColor:"black",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="סיום הרשמה"/>
       

      </div>
    )
  }
}

export default BasicQuestionnaire;