import './App.css';
import Login from './pages/Login';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import LoginFailure from './pages/LoginFailure';

axios.defaults.withCredentials = true;

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oauth2/login/success" element={<MyPage />} />
        <Route path="/oauth2/login/failure" element={<LoginFailure/>} />
      </Routes>
    </div>
  );
}

export default App;
