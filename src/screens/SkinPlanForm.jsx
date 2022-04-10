import React from 'react';
import {Row,Col} from 'react-bootstrap';
import TextInput from '../common/InputText';
import NumberInput from '../common/InputNumber';
import FormButtons from '../common/FormButtons';
import {Ingredient} from '../Classes/Ingredient';
import CheckInput from '../common/checkbox';
import {api_production} from '../service/apiService';

class SkinPlanForm extends React.Component{
    state={
        plan_id:'',
        cosmetic_licence_num:'',
        prod_id:'',
        plan_name:'',
        plan_date:'',
        notes:'',
        skinPlans:[]
    }
    componentDidMount(){
        this.getDepending();
    }
    getDepending=()=>{
        const plns = [];
        const url = `${api_production}/coshomepage`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach((item) => {
                plns.push({skinPlans:new skinPlan(item.plan_id, item.cosmetic_licence_num,item.prod_id,item.plan_name, item.plan_date,item.notes),checked:false});
            });
            console.log(plns);
            this.setState({skinPlans:[...plns]});
        });
    }
    validateInputs=()=>{
        const plansToDB = this.state.skinPlans.filter(item=>item.checked).map((item)=>item.users.plan_id);
        if(!this.state.plan_id || !this.state.cosmetic_licence_num || !this.state.prod_id || !this.state.plan_name || !this.state.plan_date || !this.state.notes){
            alert("missing some values, please fill the entire form.");
        }
        else if(!plansToDB) alert("missing deatils");
        else{
            this.addPlan(plansToDB);
        }
    }
    addPlan = (plansToDB)=>{
        const skinPlans={
            plan_id: this.state.plan_id,
            cosmetic_licence_num: this.state.cosmetic_licence_num,
            prod_id: this.state.prod_id,
            plan_name: this.state.plan_name,
            plan_date: this.state.plan_date,
            notes: this.state.notes,
            skinPlans:plansToDB
        }
        const url = `${api_production}/coshomepage`;
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(plans_data) // body data type must match "Content-Type" header
          }).then(response=>
            console.log(response.json())
        );
    }
    clearForm=()=>{
        const plns = [...this.state.skinPlans];
        plns.map((item)=>item.checked=false);
        this.setState({
            plan_id:'',
            cosmetic_licence_num:'',
            prod_id:'',
            plan_name:'',
            plan_date:'',
            notes:'',
            skinPlans:[...plns]
        })
    }
    changedCheckedValues=(itemId,checked)=>{
        let plns = [...this.state.skinPlans];
        plns.find(item=>item.pln.plan_id===itemId).checked = checked;
        this.setState({skinPlans:[...plns]});
    }
    render(){
        const {plan_id,plan_name,cosmetic_licence_num,plan_date,prod_id,notes} = this.state;
        return(
            <Row>
                <Col xs="2"></Col>
                <Col>
                    <Text value={plan_id} label="plan_id" placeholder="מספר תוכנית טיפוח"/>
                    <TextInput value={plan_name} label="plan_name" placeholder="הקלד שם תוכנית טיפוח" changedText={(e)=>this.setState({method:e.target.value})}/>
                    <TextInput value={cosmetic_licence_num} label="cosmetic_licence_num" placeholder="הקלד מספר רישיון עסק קוסמטי" changedText={(e)=>this.setState({method:e.target.value})}/>
                    <TextInput value={plan_date} label="plan_date" placeholder="תאריך כתיבת התוכנית" changedText={(e)=>this.setState({method:e.target.value})}/>
                    <TextInput value={prod_id} label="prod_id" placeholder="מספר מוצר להוספה" changedText={(e)=>this.setState({method:e.target.value})}/>
                    <TextInput value={notes} label="notes" placeholder="הקלד הנחיות לתוכנית טיפוח" changedText={(e)=>this.setState({method:e.target.value})}/>
                    {
                        skinPlans?.length>0&&
                        skinPlans?.map((item,key)=><CheckInput checked={item.checked} changeChecked={this.changedCheckedValues} id={item.plns.plan_id} key={key} label={item.plns.plan_name}/>)
                    }
                    <FormButtons btnText="צור תוכנית טיפוח" cancel={this.clearForm} submit={this.validateInputs} />
                </Col>
                <Col xs="2"></Col>

            </Row>
        );
    }
}
export default SkinPlanForm;