import React, { Component } from 'react'
import { Link } from 'react-router-dom';


 class MaslulInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {

      user_route:""

    }}

  

    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
    saveMaslul = () => {
      const user_route = this.state.user_route;
      localStorage.setItem('user_route',user_route);
   
      }

  render() {
    return (
      <div >
        <h2 style={{color:'#c4a092',paddingTop:30}}>מסלולים</h2>
        <div className="card"  style={{ width:'18rem',margin:50,float:"left",border: '#c4a092 solid 2px'}} >
         <img className="card-img-top" src={require("../assets/images/maslul1.png")} alt="maslulone" width="150" height="150"  ></img>   
        <div className="card-body">
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > מעניק לך פגישה אונליין עם קוסמטיקאית שתעריך את מצב העור שלך באופן אישי בשילוב האפליקציה החכמה שלנו, ותתאים עבורך את התכשירים בצורה מדויקת </p> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > <img src={require("../assets/images/shekel.png")} width="10" height="10"  alt="edit" />  250</h3>
      <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > חד פעמי </p>  </div>
      <input style={{width:20,height:50}} type='checkbox' name='user_route' value='1' onChange={this.handleChange}></input>
    
    </div>
    </div>
    
    <div className="card"  style={{ width:'18rem',margin:50,marginTop:0,float:"left",border: '#c4a092 solid 2px'}} >
         <img className="card-img-top" src={require("../assets/images/maslul2.png")} alt="maslultwo" width="150" height="150"  ></img>   
        <div className="card-body">
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >מעניק לך אבחון מותאם אישית על ידי קוסמטיקאית דרך האפליקציה, ליווי בתהליך ייעוץ קבוע ומעקב שבועי על מנת ששתיכן תשארו מעודכנות </p> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > <img src={require("../assets/images/shekel.png")} width="10" height="10"  alt="edit" />  150</h3>
      <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > חודשי </p>  </div>
      <input style={{width:20,height:50}} type='checkbox' name='user_route' value='2' onChange={this.handleChange}></input>
    
    </div>
    </div>
    <Link to="/maslul">
    <button style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={this.saveMaslul} > הבאה  </button>
    </Link>
      </div>

    )
  }
}

export default MaslulInfo;
