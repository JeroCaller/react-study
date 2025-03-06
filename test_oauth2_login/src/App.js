import './App.css';
import Login from './pages/Login';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
