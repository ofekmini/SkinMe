
import './App.css';
import { Routes,Route,Switch, BrowserRouter as Router, BrowserRouter,Outlet} from 'react-router-dom';
import SignUpCos from '././screens/LogIn/SignUpCos';
import ChooseUser from './screens/LogIn/ChooseUser';

import LogInUser from '././screens/LogIn/LogInUser';
import MasterForm from '././screens/LogIn/MasterForm'

import Products from './screens/Cosmetologist/Products';
import AddProduct from './screens/Cosmetologist/AddProduct';
import UserHomePage from '././screens/Users/UserHomePage';
import CosmeticHomePage from '././screens/Cosmetologist/CosmeticHomePage';

import AddSkinPlan from '././screens/Cosmetologist/AddSkinPlan';

import ForgotP from '././screens/Users/ForgotP';

import WaitingUsers from '././screens/Cosmetologist/WaitingUsers';
import Maslulim from '././screens/Users/Maslulim';
import SearchCos from './screens/Users/SearchCos';

import MaslulInfo from './screens/Users/MaslulInfo';
import SettingsUser from './screens/Users/SettingsUser';
import SettinsCos from '././screens/Cosmetologist/SettingsCos';
import ChooseMyCos from '././screens/Users/ChooseMyCos';
import ForgotCosPass from '././screens/Cosmetologist/ForgotCosPass';

import LogInCos from './screens/LogIn/LogInCos';
import WelcomeSkinMe from '././screens/LogIn/WelcomeSkinMe';

import Menu from './screens/Menu';
import RatingProducts from './screens/Users/RatingProducts';
import RatingCos from './screens/Cosmetologist/RatingCos';
import PersonalArea from '././screens/Users/PersonalArea'
import WatchSkinPlan from '././screens/Cosmetologist/WatchSkinPlan';

import UserImages from './screens/Users/UserImages';
import MyCustomers from './screens/Cosmetologist/MyCustomers';
import UserImagesforCos from './screens/Cosmetologist/UserImagesforCos';


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
           <Route path="/maslul" element={<Maslulim />} />
           <Route path="/maslulinfo" element={<MaslulInfo />} />
           <Route path='/mycustomers' element={<MyCustomers />} />
           <Route path='/products' element={<Products />}/>
           <Route path="/userhomepage" element={<UserHomePage />} />
           <Route path="/searchcos" element={<SearchCos />} />
           <Route path="/settingsuser" element={<SettingsUser />} />
           <Route path="/settingscos" element={<SettinsCos />}/>
           <Route path='/waiting' element={<WaitingUsers />}/>
           <Route path='/persoarea' element={<PersonalArea />}/>
           <Route path='/userimages' element={<UserImages />}/>
           <Route path='/userimagesforcos' element={<UserImagesforCos />}/>
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
