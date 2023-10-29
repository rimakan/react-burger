import React from 'react';
import { useSelector } from '../../../../hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { useRequestUser } from '../useRequestUser';

const PrivateRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  useRequestUser();
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
