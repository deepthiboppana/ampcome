import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { Dashboard } from './Components/Dashboard';
import { Appointments } from './Components/Appointments';

function App() {
  return (
    <div className="App">
      
      {/* <Login/> */}
      <Dashboard/>
      {/* <Appointments/> */}
      
    </div>
  );
}

export default App;
