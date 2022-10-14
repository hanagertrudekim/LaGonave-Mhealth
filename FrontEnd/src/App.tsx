import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './pages/Home/Home';
import Login from './pages/Auth/LoginPage/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
