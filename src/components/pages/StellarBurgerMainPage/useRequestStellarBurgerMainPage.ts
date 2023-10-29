import { useEffect } from 'react';
import { useDispatch } from '../../../hooks';
import { cleanupIngredients, getBurgerIngredients } from '../../../store/reactBurger/ingredientsSlice/ingredientsSlice';
import { cleanupConstructor } from '../../../store/reactBurger/constructorSlice/constructorSlice';

export const useRequestStellarBurgerMainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());

    return () => {
      dispatch(cleanupIngredients());
      dispatch(cleanupConstructor());
    };
  }, [dispatch]);
};
