import React, { useState } from 'react'

export default function FilterProducts(props) {


    return (
        <div>
            <select name="prod_type" onChange={(e) => { props.filter(e.target.value) }}>
                <option value="" >בחר סוג</option>
                <option value="ג'ל" >ג'ל</option>
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
    )
}
