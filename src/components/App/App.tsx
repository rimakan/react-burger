import React from 'react';
import s from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader';
import { StellarBurgerMainPage, LoginPage, RegisterPage } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage';

function App() {
  return (
    <div className={s.App}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<StellarBurgerMainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
