import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import { AuthProvider } from './Providers/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './Components/UserDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user_dashboard" element={<UserDashboard />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3500} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
