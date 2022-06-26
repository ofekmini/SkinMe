
import './App.css';
import { Routes,Route,Switch, BrowserRouter as Router, BrowserRouter,Outlet} from 'react-router-dom';
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
import WaitingUsers from './screens/WaitingUsers';
import Maslulim from './screens/Maslulim';
import SearchCos from './screens/SearchCos';
import ProductDetails from './screens/ProductDetails';
import MaslulInfo from './screens/MaslulInfo';
import SettingsUser from './screens/SettingsUser';
import SettinsCos from './screens/SettingsCos';

import ChooseMyCos from './screens/ChooseMyCos';

import LogInCos from './screens/LogInCos';
import WelcomeSkinMe from './screens/WelcomeSkinMe';

import Menu from './screens/Menu';




const SidebarLayout = () => (
  <>
    <Menu />
    <Outlet />
  </>
);



function App() {



 
  return (
    
    <div className="App" id="outer-container">
      
      
      <Routes>

      <Route element={<SidebarLayout/>}>
           
            <Route path="/choosecos" element={<ChooseMyCos />} />
           <Route path="/maslulinfo" element={<MaslulInfo />} />
           <Route path="/userhomepage" element={<UserHomePage />} />
           <Route path="/forgotpassword" element={<ForgotPassword />} />
           <Route path="/addproduct" element={<AddProduct />} />
           <Route path="/userhomepage" element={<UserHomePage />} />
           <Route path="/products" element={<Products />} />
           <Route path="/coshomepage" element={<CosmeticHomePage />} />
           <Route path="/updateprod" element={<UpdateManualProduct />} />
           <Route path="/addskinplan" element={<AddSkinPlan />} />
           <Route path="/forgot" element={<ForgotP />} />
           <Route path="/maslul" element={<Maslulim />} />
           <Route path="/searchcos" element={<SearchCos />} />
           <Route path="/productdetails" element={<ProductDetails />} />
           <Route path="/settingsuser" element={<SettingsUser />} />
           <Route path="/settingscos" element={<SettinsCos />}/>
           <Route path='/waiting' element={<WaitingUsers />}/>
          </Route>

        <Route path="/" element={<WelcomeSkinMe/>} />
        <Route path="/LogInUser" element={<LogInUser/>} />
        <Route path="/LogInCos" element={<LogInCos/>} />

        <Route path="/chooseuser" element={<ChooseUser />} />
        <Route path="/signupuser" element={<MasterForm />} />
        <Route path="/signupcos" element={<SignUpCos />} />
        

       
        
     
       
       
     
      
    </Routes>
    
   
   
   
   
    
    </div>
  );
}

export default App;
