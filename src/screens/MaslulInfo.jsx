import React, { Component } from 'react'

 class MaslulInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {

       maslul:""

    }}

   

  render() {
    return (
      <div >
        <div className="card"  style={{ width:'18rem',margin:50,float:"left",border: '#c4a092 solid 2px'}} >
         <img className="card-img-top" src={require("../assets/images/maslul1.png")} alt="maslulone" width="150" height="150"  ></img>   
        <div className="card-body">
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > מעניק לך פגישה אונליין עם קוסמטיקאית שתעריך את מצב העור שלך באופן אישי בשילוב האפליקציה החכמה שלנו, ותתאים עבורך את התכשירים בצורה מדויקת </p> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > <img src={require("../assets/images/shekel.png")} width="10" height="10"  alt="edit" />  250</h3>
      <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > חד פעמי </p>  </div>
      <button style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}  > בחירת מסלול </button>
    
    </div>
    </div>
    <div className="card"  style={{ width:'18rem',margin:50,float:"left",border: '#c4a092 solid 2px'}} >
         <img className="card-img-top" src={require("../assets/images/maslul2.png")} alt="maslultwo" width="150" height="150"  ></img>   
        <div className="card-body">
      <div> <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} >מעניק לך אבחון מותאם אישית על ידי קוסמטיקאית דרך האפליקציה, ליווי בתהליך ייעוץ קבוע ומעקב שבועי על מנת ששתיכן תשארו מעודכנות </p> </div>
      <div> <h3 className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > <img src={require("../assets/images/shekel.png")} width="10" height="10"  alt="edit" />  150</h3>
      <p className="card-text" style={{color:"black",fontSize:15,textAlign:'center'}} > חודשי </p>  </div>
      <button style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}}  > בחירת מסלול </button>
    
    </div>
    </div>
      </div>
    )
  }
}

export default MaslulInfo;
