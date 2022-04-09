import { render } from '@testing-library/react';
import Logo from '../commons/Logo';
import UserCard from '../commons/UserCard';
import React, { Component } from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';

 class CosmeticHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
       users:[],
    }
  }

  btnGetwaitingclients = () => {
    console.clear();
    
    const  apiUrl= 'https://localhost:44326/api/Cos/GetDepending';
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
          console.log("fetch btnFetchGetDepending= ", result);
          result.map(st => console.log(st.user_id));
          console.log('result[0].user_id=', result[0].user_id);
          this.setState({ users: [...result]}
            );
        },
        (error) => {
          console.log("err post=", error);
        })
      }
  render() {
    return (
      <div >
           <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="לקוחות ממתינות לחוות דעת " onClick={this.btnGetwaitingclients}/>
           <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="לקוחות שלי   " />
      <div >
       {this.state.users.map((users) => <UserCard key={users.user_id} users={users}/>)}
      </div>
     
      </div>
    )
  }
}
export default CosmeticHomePage;