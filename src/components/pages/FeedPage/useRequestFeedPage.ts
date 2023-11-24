import { useEffect } from 'react';
import { wsClientFirst } from '../../../store/middlewares/wsMiddleware';
import { cleanupIngredients, getBurgerIngredients } from '../../../store/reactBurger/ingredientsSlice/ingredientsSlice';
import { useDispatch } from '../../../hooks';

export const useRequestFeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
    wsClientFirst.open();

    return () => {
      dispatch(cleanupIngredients());
      wsClientFirst.close();
    };
  }, [dispatch]);
};
