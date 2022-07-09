import React, { Component } from 'react'
import InputUser from '../../commons/InputUser';
import ButtonLogIn from '../../commons/ButtonLogIn';
import PopupAddprod from '../../commons/PopUpAddprod';
import { Link } from 'react-router-dom';




let local = false;
//const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/test2/tar1/api/';
const apiUrl = 'https://proj.ruppin.ac.il/bgroup90/prod/api/Products/addprod';
//if (local) {
// apiUrl = 'https://localhost:44326/api/LogIn/register';
//}

class AddProduct extends Component {


  constructor(props) {
    super(props)

    this.state = {

      prod_name: "",
      prod_type: "",
      prod_company: "",
      prod_description: "",
      prod_manual: "",
      prod_time:"",
      prod_status: "Pending",
      prod_rate: "0",
      prod_sumRate: "0",
      prod_numOfRates: "0"

    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup

    });
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  


  addProd = (e) => {
    console.clear();



    this.togglePopup();
   debugger
    const newprod = {

      prod_name: this.state.prod_name,
      prod_type: this.state.prod_type,
      prod_company: this.state.prod_company,
      prod_description: this.state.prod_description,
      prod_manual: this.state.prod_manual,
      prod_status: this.state.prod_status,
      prod_rate: this.state.prod_rate,
      prod_numOfRates: this.state.prod_numOfRates,
      prod_sumRate: this.state.prod_sumRate,
      prod_time: this.state.prod_time,


    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(newprod),
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
          console.log(result.prod_name);
          console.log(this.state);

        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }


  render() {

    return (

      <div>
        <Link to='/coshomepage'>
          <img style={{ position: 'absolute', left: 5, top: 0 }} alt="wrinkles" height="100" width="100" src={require("../../assets/images/home2.png")} />
        </Link>
        <h4 style={{ marginTop: 35 }}>הוספת מוצר טיפוח </h4>


        <img alt="prod" height="150" width="150" src={require("../../assets/images/addprod.png")} />

        <InputUser value={this.prod_name} name="prod_name" type="text" label=" שם המוצר  " placeholder="שם המוצר  " onChange={(e) => { this.setState({ prod_name: e.target.value }) }} />
        <InputUser value={this.prod_company} name="prod_company" type="text" label=" שם החברה   " placeholder="שם החברה  " onChange={(e) => { this.setState({ prod_company: e.target.value }) }} /><br />

        <div>
          <label style={{ color: "black", fontSize: 14, fontWeight: 'bold' }}>   סוג המוצר  </label> <br />
          <select style={{ textAlign: 'right', width: '50%' }} name="prod_type" onChange={this.handlechange}>
            <option  value="ג'ל" >ג'ל</option>
            <option value="חומצה" >חומצה</option>
            <option value="טונר" >טונר</option>
            <option value="מסיר איפור" >מסיר איפור</option>
            <option value="מסכה" >מסכה</option>
            <option value="סבון  " >סבון</option>
            <option value="סרום" >סרום</option>
            <option value="פילינג" >פילינג</option>
            <option value="קרם לחות" >קרם לחות</option>
            <option value="קרם לילה">קרם לילה  </option>
            <option value="קרם יום" >קרם יום</option>
            <option value="קרם הגנה " >קרם הגנה </option>
            <option value="שמן" >שמן</option>
            <option value="תחליב" >תחליב</option>
            <option value="תרחיף" >תרחיף</option>
          </select>
        </div>

        <div>
          <label style={{ color: "black", fontSize: 14, fontWeight: 'bold' }}>   מיועד לשימוש  </label> <br />
          <select style={{ textAlign: 'right', width: '50%' }} name="prod_time" onChange={this.handlechange}>
            <option value="D" >לשימוש בשעות היום</option>
            <option value="N" >לשימוש בשעות הערב</option>
          </select>
        </div>

        <div style={{ margin: 30 }}>
          <label style={{ textAlign: 'right', fontSize: 14, fontWeight: 'bold' }}>הוראות שימוש במוצר</label>
          <textarea style={{ margin: '20', width: '90%', heigth: '20%', fontSize: 15, fontFamily: 'arial', textAlign: 'right' }} rows='5' value={this.prod_description} name="prod_description" type="textarea" label="הוראות שימוש   " placeholder=" הקלד כאן הוראות לשימוש במוצר" onChange={(e) => { this.setState({ prod_description: e.target.value }) }} />
        </div>

        <div style={{ margin: 30 }}>
          <label style={{ textAlign: 'right', fontSize: 14, fontWeight: 'bold' }}>המלצות לשימוש</label>
          <textarea style={{ margin: '20', width: '90%', heigth: '20%', fontSize: 15, fontFamily: 'arial', textAlign: 'right' }} rows='4' value={this.prod_manual} name="prod_manual" type="textarea" label=" המלצות" placeholder="הקלד כאן המלצות לשימוש במוצר" onChange={(e) => { this.setState({ prod_manual: e.target.value }) }} /><br />
        </div>

        <button style={{ margin: 20, backgroundColor: "#c4a092", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={this.addProd} >שמור</button>
        {this.state.showPopup ?
          <PopupAddprod
            header='המוצר נשלח לבדיקה בהצלחה  '
            text='אנו נבדוק את פרטי המוצר ותוכלי להשתמש בו בתוך 24 שעות'
            closePopup={this.togglePopup.bind(this)}

          />
          : null

        }
      </div>
    )
  }
}
export default AddProduct;
