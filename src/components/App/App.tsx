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
  NotFoundPage,
} from '../pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from '../Common/Routes/ProtectedRoute/ProtectedRoute';
import ProfileForm from '../pages/ProfilePage/ProfileForm/ProfileForm';
import PrivateRoute from '../Common/Routes/PrivateRoute/PrivateRoute';
import BurgerIngredientsDetailsModal from '../pages/StellarBurgerMainPage/BurgerIngredientsDetailsModal/BurgerIngredientsDetailsModal';
import FeedPage from '../pages/FeedPage/FeedPage';

function App() {
  const location = useLocation();
  const backgroundState = location.state?.backgroundLocation;
  return (
    <div className={s.App}>
      <AppHeader />
      <PrivateRoute>
        <Routes location={backgroundState || location}>
          <Route path="/" element={<StellarBurgerMainPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/ingredients/:id" element={<IngredientPage />} />
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoute>
                <ResetPasswordPage />
              </ProtectedRoute>
            }
          />

          {backgroundState && (
            <>
              <Route path="/ingredients/:id" element={<BurgerIngredientsDetailsModal />} />
            </>
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PrivateRoute>
    </div>
  );
}

export default App;
