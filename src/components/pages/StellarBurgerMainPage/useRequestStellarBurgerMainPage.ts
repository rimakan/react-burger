import { useEffect } from 'react';
import { useDispatch } from '../../../hooks';
import { cleanupIngredients, getBurgerIngredients } from '../../../store/reactBurger/ingredientsSlice/ingredientsSlice';
import { getUser } from '../../../store/user/user';

export const useRequestStellarBurgerMainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
    dispatch(getUser());

    return () => {
      dispatch(cleanupIngredients());
    };
  }, [dispatch]);
};
