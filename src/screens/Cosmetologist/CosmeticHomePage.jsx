import { render } from '@testing-library/react';
import Logo from '../../commons/Logo';
import MyUserCard from '../../commons/MyUserCard';
import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class CosmeticHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      appUser_id: localStorage.getItem('appUser_id'),
      user_status: "waiting",
      cosmetologist_id: localStorage.getItem('cosmetologist_id'),

    }
  }



  componentDidMount = () => {
    console.clear();
    const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/Cos/GetClients';
    const url=`${apiUrl}/${this.state.cosmetologist_id}`
    
    fetch(url, {
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

  render() {
    return (
      <div >
        <Logo></Logo>

        <hr />
        <div>
          <h3 style={{ color: "#c4a092", fontSize: 15, textAlign: 'center', marginTop: 30 }} > הלקוחות שלי  </h3>  <hr/>
          <div style={{}} >
            {this.state.user.length > 0 ?this.state.user.map((user) => <MyUserCard key={user.appUser_id} user={user} /> ) : <h3 style={{color:'gray', marginTop:30}}>אין לקוחות כעת</h3>} <br/>
          </div>
        </div>
        <div>

          <Link to='/waiting'>
            <button style={{ margin: 10, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} >משתמשים ממתינים לחוות דעת </button>
          </Link>


          <Link to='/addproduct' >
            <button style={{ margin: 10, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }}  >הוספת מוצר טיפוח</button>
          </Link>


        </div>

        {/* <div >
          {this.state.user.map((user) => <MyUserCard key={user.user_id} user={user} />)}
        </div> */}

      </div>
    )
  }
}
export default CosmeticHomePage;
