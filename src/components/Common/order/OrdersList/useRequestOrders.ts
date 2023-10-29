import { useEffect } from 'react';
import { useDispatch } from '../../../../hooks';
import { getBurgerIngredients } from '../../../../store/reactBurger/ingredientsSlice/ingredientsSlice';

export const useRequestOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // TO_DO: call the orders method
    dispatch(getBurgerIngredients());
  }, [dispatch]);
};
