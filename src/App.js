
import './App.css';
import SignUpUser from './screens/SignUpUser';
import { Routes,Route } from 'react-router-dom';
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
        
        

      </Routes>
    
     
       
      </header>
    </div>
  );
}

export default App;
