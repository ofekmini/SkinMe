
import './App.css';
import SignUpUser from './screens/SignUpUser';
import { Routes,Route } from 'react-router-dom';
import SignUpCos from './screens/SignUpCos';
import ChooseUser from './screens/ChooseUser';
import LogInFacebook from './screens/LogInFacebook';
import FacebookLogIn from './screens/FacebookLogIn';
import LogInUser from './screens/LogInUser';
import MasterForm from './screens/MasterForm';


import CosmeticSearch from './screens/CosmeticSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      
     <MasterForm/>
     <CosmeticSearch/>
       
      </header>
    </div>
  );
}

export default App;
