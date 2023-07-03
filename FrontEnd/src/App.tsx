import React, { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import './App.css';
import Login from './pages/Auth/Login';
import RegisterForm from './pages/patient/Register/RegisterPatient';
import Doctor from './pages/doctor';
import SearchPatient from './pages/patient/Register/SerchPatient';
import RegisterType from './pages/patient/Register/RegisterType';
import Diagnosis from './pages/patient/Diagnosis';
import { useAppDispatch } from './utils/hooks';
import { setUser } from './store/slice/authSlice';
import Cookies from 'react-cookie/cjs/Cookies';

function App() {
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const token = cookies.get('token');
  
  useEffect(() => {
    dispatch(setUser(token));
  }, [dispatch, token]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/home" element={<Doctor />} />
        <Route path="/patient/identification" element={<RegisterType />} />
        <Route path="/patient/register-form" element={<RegisterForm />} />
        <Route path="/patient/diagnosis-form/:id" element={<Diagnosis />} />
        <Route path="/patient/search-patient" element={<SearchPatient />} />
      </Routes>
    </div>
  );
}

export default App;
