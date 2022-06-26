import { render } from '@testing-library/react';
import Logo from '../commons/Logo';
import UserCard from '../commons/UserCard';
import React, { Component } from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';

 class CosmeticHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
       users:[],
       user_id:localStorage.getItem('user_id'),
       user_status:"waiting",
       cosmetologist_id:localStorage.getItem('cosmetologist_id'),

    }
  }
  

      btnGetMyclients = () => { 
        console.clear();
        
        const  apiUrl= 'http://localhost:58031/api/Cos/GetClients';

        const cosmetologist_id={cosmetologist_id:this.state.cosmetologist_id};

        fetch(apiUrl + {
          method: 'POST', 
          body: JSON.stringify(cosmetologist_id),
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
        <Logo></Logo>

           <Link to='/waiting'>
           <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="משתמשים ממתינים לחוות דעת "/>
           </Link>

           <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="לקוחות שלי   " onClick={this.btnGetMyclients} />
           
           <Link to='/addproduct' >
           <ButtonLogIn  style={{margin:30,backgroundColor:"#c4a092",color:"white",fontSize:15,width:'80%',height:40,borderColor:"#e8e8e8" , borderWidth:1,borderRadius:50}} name="הוספת מוצר טיפוח  " />
           </Link>
      <div >
       {this.state.users.map((users) => <UserCard key={users.user_id} users={users}/>)}
      </div>
     
      </div>
    )
  }
}
export default CosmeticHomePage;
