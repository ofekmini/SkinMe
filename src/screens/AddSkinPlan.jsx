import React, { Component } from 'react'
import InputUser from '../commons/InputUser';
import ButtonLogIn from '../commons/ButtonLogIn';
import CardAddProdToPlan from '../commons/CardAddProdToPlan';
import Logo from '../commons/Logo';
import UserInfo from '../commons/UserInfo';
import PopUpCos from '../commons/PopUpCos';
import FilterProducts from './FilterProducts';
import { Link } from 'react-router-dom';




let local = false;
//const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/test2/tar1/api/';
const apiUrl = 'https://localhost:58031/api/cos';
//if (local) {
// apiUrl = 'https://localhost:44326/api/LogIn/register';
//}

class AddSkinPlan extends Component {

  constructor(props) {
    super(props)

    this.state = {
      plan_name: "",
      notes: "",
      products: [],
      filterProducts: [],
      ppp: [],
      user: null,
      users: [],
      user_status: "waiting",
      smartProducts: []

    }
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  filterProduct = (type) => {

    let arr = [...this.state.products]

    arr = arr.filter(x => x.prod_type == type)

    this.setState({ filterProducts: arr })
  }

  addProductToPlan = (item) => {

    let arr = [...this.state.ppp]
    const index = arr.findIndex(prod => prod.$id === item.$id)
    if (index !== -1) {
      return
    }
    arr.push(item)
    this.setState({ ppp: arr })
  }

  deleteProductFromPlan = (item) => {
    let arr = [...this.state.ppp]
    let product = arr.findIndex(x => x.prod_id == item.prod_id)
    arr.splice(product, 1)
    this.setState({ ppp: arr })
  }

  componentDidMount() {

    const user = JSON.parse(localStorage.getItem('user'));

    this.setState({ user })

    this.loadSmartElement();

    const apiUrl = 'http://localhost:58031/api/Products/status';

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
          result.map(st => console.log(st.prod_id));
          console.log('result[0].prod_id', result[0].prod_id);
          this.setState({ products: [...result], filterProducts: [...result] }

          );

        },
        (error) => {
          console.log("err post=", error);
        })

  }


  addSkinPlan = (e) => {
    console.clear();
   // const apiUrl = 'http://localhost:58031/api/Cos/AddSkinPlan';
   const user_id = JSON.parse(localStorage.getItem('user')).appUser_id;

    const apiUrl = `http://localhost:58031/api/Cos/AddSkinPlan?id=${user_id}`;

    const newskinplan = {
      plan_name: this.state.plan_name,
      notes: this.state.notes,
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(newskinplan),
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
          console.log(result.plan_name);
          console.log(this.state);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  loadSmartElement() {


    const user_id = JSON.parse(localStorage.getItem('user')).appUser_id;

    const apiUrl = `http://localhost:58031/api/Cos/SearchFamiliar?id=${user_id}`;

    fetch(apiUrl, {
      method: 'POST',
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
          console.log("fetch btnFetchSearchFamiliar= ", result);
          result.map(st => console.log(st.prod_id));
          console.log('result[0].prod_id', result[0].prod_id);
          this.setState({ smartProducts: [...result] }
          );

        },
        (error) => {
          console.log("err post=", error);
        })

  }

  submitProducts = () => {
    const dataToSend = {
      data: this.state.ppp
    }
    console.log(JSON.stringify(dataToSend))

  }

  render() {
    console.log({ smart: this.state.smartProducts })
    console.log({ filter: this.state.filterProducts })
    return (
      <div>

        <Link to='/coshomepage'>
          <img style={{ position: 'absolute', left: 5, top: 0 }} alt="wrinkles" height="100" width="100" src={require("../assets/images/home2.png")} />
        </Link>

        <h4 style={{ marginTop: 35 }}>יצירת תוכנית טיפוח </h4>

        <div>
          <h3 style={{ color: "#c4a092", fontSize: 15, textAlign: 'center' }} > פרטי משתמש </h3>
          <div style={{ margin: 10 }} >
            {this.state.user && <UserInfo user={this.state.user} users={this.state.users} />}
          </div>
        </div>

        <hr />

        <div>
          <h3 style={{ color: "#c4a092", fontSize: 15, textAlign: 'center' }} > פרטי התוכנית </h3>
          <InputUser value={this.plan_name} name="plan_name" type="text" label=" שם התוכנית  " placeholder="שם התוכנית   " onChange={(e) => { this.setState({ plan_name: e.target.value }) }} />
          <InputUser value={this.notes} name="notes" type="text" label="  הערות   " placeholder="הערות   " onChange={(e) => { this.setState({ notes: e.target.value }) }} /><br />
          <button style={{ backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '60%', height: 30, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50, margin: 10 }} onClick={this.addSkinPlan} >שמירה והמשך לבחירת מוצרים</button>
        </div>

        <hr />

        <div>
          <h3 style={{ margin: 30, color: "#c4a092", fontSize: 15, textAlign: 'center' }} >הוספת מוצרים </h3>

          <h4 style={{ margin: 30, color: "gray", fontSize: 15, textAlign: 'center' }} >...מומלץ: משתמשים בעלי פרופיל דומה אוהבים</h4>
          <div style={{ backgroundColor: 'red' }}>
            {this.state.smartProducts.map((products) => <CardAddProdToPlan add={(product) => this.addProductToPlan(product)} key={products.prod_id} products={products} />)}
          </div>


          <div style={{ margin: 20 }}>
            <h4 style={{ margin: 30, color: "gray", fontSize: 15, textAlign: 'center' }} >או: בחירה מתוך מאגר המוצרים</h4>
            <FilterProducts filter={this.filterProduct} />
          </div>

          <div >
            {this.state.filterProducts.map((products) => <CardAddProdToPlan add={(product) => this.addProductToPlan(product)} key={products.prod_id} products={products} />)}
          </div>
        </div>




        <div style={{ margin: 20 }}>
          <h3 style={{ color: "#c4a092", fontSize: 15, textAlign: 'center', }} > מוצרים שנוספו לתוכנית </h3>
          {this.state.ppp.map((product) => {
            return (<div>{product.prod_name}
              <button style={{ backgroundColor: "red", color: 'white', height: 15, width: 15 }} onClick={() => this.deleteProductFromPlan(product)} >X</button></div>)
          })}
        </div>

        <button style={{ margin: 30, backgroundColor: "black", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={this.submitProducts} >שמירה והוספת מוצרים</button>

        {this.state.showPopup ?
          <PopUpCos
            header=' תוכנית טיפוח נוספה בהצלחה '
            text=' התוכנית עודכנה במערכת'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }

      </div>
    )
  }
}
export default AddSkinPlan;
