import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css'
import Login from './pages/Auth/Login';
import RegisterForm from './pages/patient/Register';
import Doctor from './pages/doctor';
import SearchPatient from './pages/patient/Search';
import RegisterType from './pages/patient/RegisterType';
import Diagnosis from './pages/patient/Diagnosis';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/identification" element={<RegisterType />} />
          <Route path="/patient/register-form" element={<RegisterForm />} />
          <Route path="/patient/diagnosis-form" element={<Diagnosis />} />
          <Route path="/patient/search-patient" element={<SearchPatient />} />
      </Routes>
    </div>
  );
}

export default App;
