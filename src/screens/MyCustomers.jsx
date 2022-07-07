import Logo from '../commons/Logo';
import UserCard from '../commons/UserCard';
import React, { Component } from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';

class MyCustomers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      cosmetologist_id: localStorage.getItem('cosmetologist_id'),

    }
  }

  componentDidMount = () => {
    console.clear();

    const apiUrl = 'http://localhost:58031/api/Cos/GetClients';

    const cosmetologist_id = { cosmetologist_id: this.state.cosmetologist_id };

    fetch(apiUrl, {
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
          this.setState({ user: [...result] }
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
        <h4 style={{ marginTop: 35 }}> הלקוחות שלי </h4>

        
          {this.state.user.map((user) => <UserCard key={user.appUser_id} user={user} />)}
        

      </div>
    )
  }
}

export default MyCustomers;

