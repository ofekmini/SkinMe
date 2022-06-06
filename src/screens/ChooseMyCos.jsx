import React, { Component } from 'react'
import CardCosInfo from '../commons/CardCosInfo';

 class ChooseMyCos extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       cos:[],

  
       
    }
  }




  componentDidMount(){
  
    const  apiUrl= 'http://localhost:58031/api/map';

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
          result.map(st => console.log(st.cosmetologist_id));
          console.log('result[0].prod_id', result[0].cosmetologist_id);
          this.setState({ cos: [...result]}
            
            );
         
        },
        (error) => {
          console.log("err post=", error);
        })

      }
 


  render() {
    return (
      <div>

     <h1 style={{color:'#c4a092', fontSize:25}}>בחר את הקוסמטיקאית שלך </h1>
     
     {this.state.cos.map((cos) => <CardCosInfo  key={cos.cosmetologist_id} cos={cos}/>)}


      </div>
    )
  }
}

export default ChooseMyCos;
