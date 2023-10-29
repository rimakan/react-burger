import React from 'react';
import { useSelector } from '../../../../hooks';
import { Navigate } from 'react-router-dom';
import { useRequestUser } from '../useRequestUser';

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  useRequestUser();
  const user = useSelector((s) => s.user.user);
  const token = useSelector((s) => s.auth.refreshToken);

  return user || token ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
