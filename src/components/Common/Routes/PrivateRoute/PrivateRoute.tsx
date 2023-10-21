import React from 'react';
import { useSelector } from '../../../../hooks';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const user = useSelector((s) => s.auth.user);
  const token = useSelector((s) => s.auth.refreshToken);

  return (user || token) &&
    (pathname === '/login' ||
      pathname === '/register' ||
      pathname === '/forgot-password' ||
      pathname === '/reset-password') ? (
    <Navigate to="/" />
  ) : (
    <>{children}</>
  );
};

export default PrivateRoute;
