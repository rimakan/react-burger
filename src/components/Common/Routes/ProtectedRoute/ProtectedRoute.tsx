import React from 'react';
import { useSelector } from '../../../../hooks';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const user = useSelector((s) => s.auth.user);
  const token = useSelector((s) => s.auth.refreshToken);

  return user || token ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
