import { useEffect } from 'react';
import { useDispatch } from '../../../hooks';
import { getUser } from '../../../store/user/user';

export const useRequestProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
};
