import { useEffect } from 'react';
import { wsClientSecond } from '../../../store/middlewares/wsMiddleware';
import { useDispatch } from '../../../hooks';
import { cleanupIngredients, getBurgerIngredients } from '../../../store/reactBurger/ingredientsSlice/ingredientsSlice';

export const useRequestOrdersHistoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
    wsClientSecond.open();

    return () => {
      dispatch(cleanupIngredients());
      wsClientSecond.close();
    };
  }, [dispatch]);
};
