import Logo from '../commons/Logo';
import UserCard from '../commons/UserCard';
import React, { Component } from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';

class MyCustomers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      cosmetologist_id:localStorage.getItem('cosmetologist_id'),

    }
  }

  componentDidMount = () => {
    console.clear();
        
        const  apiUrl= 'http://localhost:58031/api/Cos/GetClients';

        const cosmetologist_id={cosmetologist_id:this.state.cosmetologist_id};

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
        <Link to='/coshomepage'>
          <img style={{ position: 'absolute', left: 5, top: 0 }} alt="wrinkles" height="100" width="100" src={require("../assets/images/home2.png")} />
        </Link>
        <h4 style={{ marginTop: 35 }}> הלקוחות שלי </h4>

        <div >
          {this.state.users.map((users) => <UserCard key={users.appUser_id} users={users} />)}
        </div>

      </div>
    )
  }
}

export default MyCustomers;

