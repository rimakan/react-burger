import React from 'react';
import s from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader';
import {
  StellarBurgerMainPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  ForgotPasswordPage,
  ProfilePage,
  OrdersHistoryPage,
  IngredientPage,
} from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../Common/Routes/ProtectedRoute/ProtectedRoute';
import ProfileForm from '../pages/ProfilePage/ProfileForm/ProfileForm';
import PrivateRoute from '../Common/Routes/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className={s.App}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<StellarBurgerMainPage />}>
            <Route path="/ingredients/:id" element={<IngredientPage />} />
          </Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          >
            <Route path="/profile" index element={<ProfileForm />} />
            <Route path="/profile/orders" element={<OrdersHistoryPage />} />
          </Route>
        </Routes>

        <PrivateRoute>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Routes>
        </PrivateRoute>
      </BrowserRouter>
    </div>
  );
}

export default App;
