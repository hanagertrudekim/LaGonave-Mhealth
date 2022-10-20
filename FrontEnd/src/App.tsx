import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Auth/LoginPage/Login';
import RegisterForm from './pages/patient/RegisterForm';
import DiagnosisForm from './pages/patient/DiagnosisForm';
import Identification from './pages/IdentificationPage/Identification';
import SearchPatient from './pages/patient/SearchPatient/SearchPatient';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/patient/register-form" element={<RegisterForm />} />
        <Route path="/patient/diagnosis-form" element={<DiagnosisForm />} />
        <Route path="/patient/search-patient" element={<SearchPatient />} />
      </Routes>
    </div>
  );
}

export default App;
