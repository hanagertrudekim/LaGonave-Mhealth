import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Auth/LoginPage/Login';
import NewPatient from './pages/patient/NewPatient';
import SecondForm from './pages/patient/SecondForm';
import Identification from './pages/Auth/IdentificationPage/Identification';
import SearchPatient from './pages/Auth/SearchPatient/SearchPatient';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/patient/new-patient" element={<NewPatient />} />
        <Route path="/patient/auth-patient" element={<SearchPatient />} />
        <Route path="/patient/second-form" element={<SecondForm />} />
      </Routes>
    </div>
  );
}

export default App;
