import React, { Component, useEffect, useState } from 'react'

import InputUser from '../../../commons/InputUser';
import validator from 'validator'



function Payment(props) {
  const [maslul, setmaslul] = useState();
  const [errorMessagecc, setErrorMessagecc] = useState('');
  const [errorMessagecvv, setErrorMessagecvv] = useState('');
  const [errorMessagecardholder, setErrorMessagecardholder] = useState('')

  useEffect(() => {
    if (localStorage.getItem('user_route') === 1) {
      setmaslul(true);
    } else {
      setmaslul(false);
    }
  }, [])
  if (props.currentStep !== 3) {
    return null
  }


  const validateCreditCard = (value) => {

    if (validator.isLength(value, { min: 16, max: 16})) {
      setErrorMessagecc('Valid CreditCard Number')
    } else {
      setErrorMessagecc('Enter valid CreditCard Number!')
    }
  }
  const validateCvv = (value) => {

    if (validator.isLength(value, { min: 3, max: 3 })) {
      setErrorMessagecvv('Valid CVV ')
    } else {
      setErrorMessagecvv('Enter valid CVV!')
    }
  }

  const validateCardHolder = (value) => {

    if (validator.isAlpha(value)) {
      setErrorMessagecardholder('Valid Card Holder name ')
    } else {
      setErrorMessagecardholder('Enter valid Card holder name!')
    }
  }



  return (
    <React.Fragment>

      <div>
        <div style={{ backgroundColor: '#EEE4C4' }}>
          <img alt="cart" height="60" width="60" style={{ margin: 0 }} src={require("../../../assets/images/cart.png")} />
          <h2 style={{ color: '#c4a092', margin: 0, textDecoration: 'underline' }}> פירוט הרכישה </h2>

          {maslul ? (
            <h3 style={{ color: 'black', fontFamily: 'sans-serif', direction: 'rtl' }}>  מסלול ייעוץ חד פעמי<br /><br /> מחיר לתשלום:<br /> 250 ש"ח <br /></h3>

          ) : (
            <h3 style={{ color: 'black', fontFamily: 'sans-serif', direction: 'rtl' }}>  מסלול ליווי<br /><br />מחיר לתשלום:<br />  150 ש"ח <br /></h3>

          )}

        </div>
        <img alt="visa" height="40" width="40" src={require("../../../assets/images/visalogo.png")} />

        <img alt="mc" height="40" width="40" style={{ marginLeft: 20 }} src={require("../../../assets/images/MasterCardlogo.png")} />

        <div className="form-group" style={{ border: '#B9D6BC solid 2px', borderRadius: 10, padding: 20, margin: 10 }}>

          <InputUser value={props.creditcard} name="creditcard" type="text" label="מספר כרטיס " placeholder="מספר כרטיס  " onChange={(e) => validateCreditCard(e.target.value)} />
          <span style={{
            fontWeight: 'bold',
            color: 'red',
            fontSize: 12
          }}>{errorMessagecc}</span>
          <br />

          <label style={{ color: "black", fontSize: 13, textAlign: "right" }}>   תוקף הכרטיס <br />

            <label style={{ color: "black", fontSize: 13, textAlign: "right" }}>   שנה     </label>

            <select name="prod_type" onChange={props.handlechange}>
              <option value="סרום" >1</option>
              <option value="סרום" >2</option>
              <option value="סרום" >3</option>
              <option value="סרום" >4</option>
              <option value="סרום" >5</option>
              <option value="סרום" >6</option>
              <option value="סרום" >7</option>
              <option value="סרום" >8</option>
              <option value="סרום" >9</option>
              <option value="סרום" >10</option>
              <option value="סרום" >11</option>
              <option value="סרום" >12</option>
            </select>


            <label style={{ color: "black", margin: 5, fontSize: 13, textAlign: "right" }}>   חודש   </label>

            <select name="prod_type" onChange={props.handlechange}>
              <option value="סרום" >2022</option>
              <option value="סרום" >2023</option>
              <option value="סרום" >2024</option>
              <option value="סרום" >2025</option>
              <option value="סרום" >2026</option>
              <option value="סרום" >2027</option>
              <option value="סרום" >2028</option>
              <option value="סרום" >2029</option>
              <option value="סרום" >2030</option>
              <option value="סרום" >2031</option>
              <option value="סרום" >2032</option>
              <option value="סרום" >2033</option>
              <option value="סרום" >2034</option>
              <option value="סרום" >2035</option>
              <option value="סרום" >2036</option>
              <option value="סרום" >2037</option>
              <option value="סרום" >2038</option>
              <option value="סרום" >2039</option>
              <option value="סרום" >2040</option>
              <option value="סרום" >2041</option>
              <option value="סרום" >2042</option>
              <option value="סרום" >2043</option>
              <option value="סרום" >2044</option>
              <option value="סרום" >2045</option>
            </select>
          </label>


          <InputUser value={props.cvv} name="CVV" type="text" label="CVV" placeholder="CVV" onChange={(e) => validateCvv(e.target.value)} />
          <span style={{
            fontWeight: 'bold',
            color: 'red',
            fontSize: 12
          }}>{errorMessagecvv}</span>
          <br />
          <InputUser value={props.cardholder} name="carholder" type="text" label="שם בעל הכרטיס" placeholder="שם בעל הכרטיס" onChange={(e) => validateCardHolder(e.target.value)} />
          <span style={{
            fontWeight: 'bold',
            color: 'red',
            fontSize: 12
          }}>{errorMessagecardholder}</span>
          <br />

        </div>


      </div>

      <button style={{ margin: 30, backgroundColor: "black", color: "white", fontSize: 15, width: '80%', height: 40, borderColor: "#e8e8e8", borderWidth: 1, borderRadius: 50 }} onClick={props.saveMaslul}> ביצוע תשלום    </button>


    </React.Fragment>
  );
}
export default Payment;