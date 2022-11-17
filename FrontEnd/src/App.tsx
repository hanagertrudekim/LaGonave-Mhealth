import React, {useEffect} from 'react';
import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import './App.css'
import Login from './pages/Auth/Login';
import RegisterForm from './pages/patient/Register';
import Doctor from './pages/doctor';
import SearchPatient from './pages/patient/Search';
import RegisterType from './pages/patient/RegisterType';
import Diagnosis from './pages/patient/Diagnosis';
import { useAppDispatch } from './hooks';
import { setUser } from './store/slice/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const name = JSON.parse(localStorage.getItem("name") || "{}")

  useEffect(() => {
    dispatch(setUser(name))
  },[dispatch, name])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor/home" element={<Doctor />} />
          <Route path="patient/identification" element={<RegisterType />} />
          <Route path="/patient/register-form" element={<RegisterForm />} />
          <Route path="/patient/diagnosis-form" element={<Diagnosis />} />
          <Route path="/patient/search-patient" element={<SearchPatient />} />
      </Routes>
    </div>
  );
}

export default App;
