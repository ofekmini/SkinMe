import React, { Component } from 'react'
import CardCosInfo from '../../commons/CardCosInfo';
import PopUpMaslul from '../../commons/PopUpMaslul';

 class ChooseMyCos extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       cos:[],

       cosmetologist_id:'',

       appUser_id: localStorage.getItem('appUser_id'),
       showPopup: false,
  
       
    }
  }

  
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }




  componentDidMount(){
  
    const  apiUrl= 'https://proj.ruppin.ac.il/bgroup90/prod/api/cosmetologists/GetAllCos';

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
          result.map(st => console.log(st.cosmetologist_id));
          console.log('result[0].prod_id', result[0].cosmetologist_id);
          this.setState({ cos: [...result]}
            
            );
         
        },
        (error) => {
          console.log("err post=", error);
        })

      }

      chooseCos = (e)=> {
        console.clear();
        e.preventDefault()
        const apiUrl = `https://proj.ruppin.ac.il/bgroup90/prod/api/Users/addmycos?id=${this.state.appUser_id}`;
    
        this.togglePopup(); 

        const user_coschoice={
            
          cosmetologist_id: localStorage.getItem('cosmetologist_id') 
    
        };
    
        fetch(apiUrl, {
          method: 'PUT',
          body: JSON.stringify(user_coschoice),
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
              console.log("fetch PUT= ", result);
              console.log(result.cosmetologist_id);
              console.log(this.state);
              //window.location.href = '/persoarea';
            },
            (error) => {
              console.log("err post=", error);
            });
    
        console.log('END');
      }

      
 


  render() {
    return (
      <div >
        <h4 style={{marginTop:35}}>בחירת  קוסמטיקאית  </h4> <hr />

     <h1 style={{color:'#c4a092', fontSize:20 ,margin:20}}>בחר את הקוסמטיקאית שלך </h1>
     
     {this.state.cos.map((cos) => <CardCosInfo  key={cos.cosmetologist_id} cos={cos} />)}
     
     <button style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} onClick={this.chooseCos} > אישור </button>
     {this.state.showPopup ? 
          <PopUpMaslul
            header=' הפרטים נקלטו בהצלחה '
            text='הקוסמטיקאית קיבלה את הפרטים ותרכיב לך תוכנית אישית במהלך 24 השעות הקרובות.
            התוכנית תתעדכן בדף הבית. תודה'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}

export default ChooseMyCos;