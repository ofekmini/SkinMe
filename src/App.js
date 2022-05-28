
import './App.css';
import { Routes,Route,Switch,Router } from 'react-router-dom';
import SignUpCos from './screens/SignUpCos';
import ChooseUser from './screens/ChooseUser';
import FacebookLogIn from './screens/FacebookLogIn';
import LogInUser from './screens/LogInUser';
import MasterForm from './screens/MasterForm';
import LoginWGoggle from './screens/LoginWGoggle';
import Products from './screens/Products';
import ForgotPassword from './screens/ForgotPassword';
import AddProduct from './screens/AddProduct';
import UserHomePage from './screens/UserHomePage';
import CosmeticHomePage from './screens/CosmeticHomePage';
import UpdateManualProduct from './screens/UpdateManualProduct';
import AddSkinPlan from './screens/AddSkinPlan';
import ForgotP from './screens/ForgotP';
import Survey from './screens/Survey';
import Maslulim from './screens/Maslulim';

import SearchCos from './screens/SearchCos';












function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Routes>

        <Route path="/" element={<LogInUser/>} />
        <Route path="/chooseuser" element={<ChooseUser />} />
        <Route path="/signupuser" element={<MasterForm />} />
        <Route path="/signupcos" element={<SignUpCos />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/userhomepage" element={<UserHomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/coshomepage" element={<CosmeticHomePage />} />
        <Route path="/updateprod" element={<UpdateManualProduct />} />
        <Route path="/addskinplan" element={<AddSkinPlan />} />
        <Route path="/forgot" element={<ForgotP />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/maslul" element={<Maslulim />} />
        <Route path="/searchcos" element={<SearchCos />} />

       
      
      </Routes>
    
     
       
      </header>
    </div>
  );
}

export default App;
