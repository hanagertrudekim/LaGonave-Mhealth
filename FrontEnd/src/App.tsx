import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css'
import Login from './pages/Auth/LoginPage/Login';
import RegisterForm from './pages/patient/RegisterForm';
import DiagnosisForm from './pages/patient/DiagnosisForm';
import Identification from './pages/IdentificationPage/Identification';
import SearchPatient from './pages/patient/SearchPatient/SearchPatient';
import Doctor from './pages/doctor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/patient/register-form" element={<RegisterForm />} />
        <Route path="/patient/diagnosis-form" element={<DiagnosisForm />} />
        <Route path="/patient/search-patient" element={<SearchPatient />} />
      </Routes>
    </div>
  );
}

export default App;
