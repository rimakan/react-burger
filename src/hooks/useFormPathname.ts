import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const useFormPathname = () => {
  const getPathname = useMemo(
    () => (pathName: string) => {
      return pathName.slice(1);
    },
    [],
  );

  const { pathname } = useLocation();

  return getPathname(pathname);
};
