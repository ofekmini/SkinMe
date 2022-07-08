
import './App.css';
import { Routes,Route,Switch, BrowserRouter as Router, BrowserRouter,Outlet} from 'react-router-dom';
import SignUpCos from '././screens/LogIn/SignUpCos';
import ChooseUser from './screens/LogIn/ChooseUser';

import LogInUser from '././screens/LogIn/LogInUser';
import MasterForm from './screens/MasterForm';

import Products from './screens/Products';
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
import ForgotCosPass from './screens/ForgotCosPass';

import LogInCos from '././screens/LogIn/LogInCos';
import WelcomeSkinMe from '././screens/LogIn/WelcomeSkinMe';

import Menu from './screens/Menu';
import RatingProducts from './screens/RatingProducts';
import RatingCos from './screens/RatingCos';
import PersonalArea from './screens/PersonalArea'
import WatchSkinPlan from './screens/WatchSkinPlan';
import Profile from './screens/Profile';
import UserImages from './screens/UserImages';
import MyCustomers from './screens/MyCustomers';


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
          
           <Route path="/addproduct" element={<AddProduct />} />
           <Route path="/addskinplan" element={<AddSkinPlan />} />
           <Route path="/coshomepage" element={<CosmeticHomePage />} />
           <Route path="/choosecos" element={<ChooseMyCos />} />
           <Route path='/showplan' element={<WatchSkinPlan />} />
           <Route path="/forgot" element={<ForgotP />} />
           

           <Route path="/forgotpassword" element={<ForgotP/>} />

           <Route path="/maslul" element={<Maslulim />} />
           <Route path="/maslulinfo" element={<MaslulInfo />} />
           <Route path='/mycustomers' element={<MyCustomers />} />
           <Route path='/products' element={<Products />}/>
           <Route path="/productdetails" element={<ProductDetails />} />
           
           <Route path="/updateprod" element={<UpdateManualProduct />} />
           <Route path="/userhomepage" element={<UserHomePage />} />
           <Route path="/searchcos" element={<SearchCos />} />
           <Route path="/settingsuser" element={<SettingsUser />} />
           <Route path="/settingscos" element={<SettinsCos />}/>
           <Route path='/waiting' element={<WaitingUsers />}/>
           

           <Route path='/profile' element={<Profile />}/>
           <Route path='/persoarea' element={<PersonalArea />}/>
           <Route path='/userimages' element={<UserImages />}/>
          </Route>

        <Route path="/" element={<WelcomeSkinMe/>} />
        <Route path="/LogInUser" element={<LogInUser/>} />
        <Route path="/LogInCos" element={<LogInCos/>} />

        <Route path="/chooseuser" element={<ChooseUser />} />
        <Route path="/signupuser" element={<MasterForm />} />
        <Route path="/signupcos" element={<SignUpCos />} />
        <Route path="/ratingp" element={<RatingProducts />} />
        <Route path="/ratingcos" element={<RatingCos />} />

        <Route path="/forgot" element={<ForgotP />} />
        <Route path='/forgotcospass' element={<ForgotCosPass />} />
        
       
    </Routes>
    
    
    </div>
  );
}

export default App;
