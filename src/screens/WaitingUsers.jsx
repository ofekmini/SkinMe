import Logo from '../commons/Logo';
import UserCard from '../commons/UserCard';
import React, { Component } from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';

class WaitingUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      user_status: "waiting",
      cosmetologist_id: localStorage.getItem('cosmetologist_id'),
      errorMessage:""

    }
  }

  componentDidMount = () => {
    console.clear();
    const apiUrl = `http://localhost:58031/api/Cos/Depending/?id=${this.state.cosmetologist_id}`;

    const user_status = { user_status: this.state.user_status };

    fetch(apiUrl, {
      method: 'Post',
      body: JSON.stringify(user_status),
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
          result.map(st => console.log(st.appUser_id));
          console.log('result[0].user_id=', result[0].appUser_id);
          this.setState({ users: [...result] }
          );
         
        },
        (error) => {
          console.log("err post=", error);
        })
  }

  /* function message(props) {
     return <h2>אין לקוחות ממתינים</h2>
   }
 
   function greeting(props) {
     const isEmpty = props.isEmpty;
     if (isEmpty) {
       return <message/>
     }
 
   } */


  render() {
    return (
      <div >
        <Link to='/coshomepage'>
          <img style={{ position: 'absolute', left: 5, top: 0 }} alt="wrinkles" height="100" width="100" src={require("../assets/images/home2.png")} />
        </Link>
        <h4 style={{ marginTop: 35 }}> משתמשים ממתינים לחוות דעת </h4>

        <div >
          {this.state.users.map((user) => <UserCard key={user.appUser_id} user={user} />)}
         
        
        </div>

      </div>
    )
  }
}

export default WaitingUsers;

