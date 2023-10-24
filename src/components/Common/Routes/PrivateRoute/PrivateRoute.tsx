import React from 'react';
import { useSelector } from '../../../../hooks';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const user = useSelector((s) => s.user.user);

  return user &&
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
