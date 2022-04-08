import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.development';
import Logo from '../commons/Logo';

class CosmeticHomePage extends Component {
render () {
return (
    <div>
<Logo/>

<h3 style={{color:'#c4a092',textDecorationLine:'underline'}}>  הלקוחות שלי </h3>


</div>
)
}
}
export default CosmeticHomePage;
