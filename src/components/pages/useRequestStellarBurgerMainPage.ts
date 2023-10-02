import { useEffect } from 'react';
import { useDispatch } from '../../hooks';
import { cleanupIngredients, getBurgerIngredients } from '../../store/reactBurger/ingredientsSlice/ingredientsSlice';

export const useRequestStellarBurgerMainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());

    return () => {
      dispatch(cleanupIngredients());
    };
  }, [dispatch]);
};
