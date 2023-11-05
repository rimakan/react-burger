import { useEffect, useMemo, useState } from 'react';
import { useSelector } from './useSelector';
import { useDispatch } from './useDispatch';
import { getBurgerIngredients } from '../store/reactBurger/ingredientsSlice/ingredientsSlice';

export const useOrderCardData = (orderIngredients: string[]) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  const burgerIngredients = useSelector(({ reactBurger }) => reactBurger.burgerIngredients.ingredients);
  const [restIngredientsLength, setRestIngredientsLength] = useState(0);

  const newIngredients = useMemo(() => {
    if (orderIngredients.length <= 5) return orderIngredients;

    if (orderIngredients.length > 5) {
      const [first, second, third, fourth, fifth, sixth, ...rest] = orderIngredients;
      setRestIngredientsLength(rest.length);
      return [first, second, third, fourth, fifth, sixth];
    }
  }, [orderIngredients]);

  const price = useMemo(
    () =>
      burgerIngredients
        .filter((ingredient) => orderIngredients.includes(ingredient._id))
        .reduce((prev, current) => prev + current.price, 0),
    [burgerIngredients, orderIngredients],
  );

  return { newIngredients, restIngredientsLength, price };
};
