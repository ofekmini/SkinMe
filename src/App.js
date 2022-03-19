
import './App.css';
import Survey from './screens/Survey';
import SignUpUser from './screens/SignUpUser';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Routes>

        <Route path="/" element={<SignUpUser/>} />
        <Route path="/survey" element={<Survey />} />


      </Routes>
       
      </header>
    </div>
  );
}

export default App;
