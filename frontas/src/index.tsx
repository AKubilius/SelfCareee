import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import HairsalonPage from './pages/HairsalonPage'
import SalonPage from './pages/SalonPage';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/hairsalon/:id" element={<SalonPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/hairsalon" element={<HairsalonPage />} />
      </Routes>
  </React.StrictMode>
  </BrowserRouter>
);
