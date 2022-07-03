import Logo from '../commons/Logo';
import UserCard from '../commons/UserCard';
import React, { Component } from 'react'
import ButtonLogIn from '../commons/ButtonLogIn';
import { Link } from 'react-router-dom';

class WaitingUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
           users:[],
           user_status:"waiting",
        }
      }

      componentDidMount = () => {
        console.clear();
        const  apiUrl= 'http://localhost:58031/api/Cos/Depending';
        const user_status={user_status:this.state.user_status};

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
                  this.setState({ users: [...result]}
                    );
                },
                (error) => {
                  console.log("err post=", error);
                })
          }
    
          //componentDidMount(){
      //      this.this.Getwaitingclients();
      //    }

        render() {
            return (
              <div >
           

                <h4 style={{marginTop:35}}> משתמשים ממתינים לחוות דעת </h4>
                   
           <div >
               {this.state.users.map((users) => <UserCard key={users.appUser_id} users={users}/>)}
            </div> 
             
              </div>
            )
          }
        }
    
        export default WaitingUsers;
        
