import { useEffect, useMemo, useState } from 'react';
import { useSelector } from './useSelector';
import { useDispatch } from './useDispatch';
import { getBurgerIngredients } from '../store/reactBurger/ingredientsSlice/ingredientsSlice';
import { ingredientIconDict } from '../components/Common/IngredientPreviewImg/IngredientPreviewImg.constants';

export const useOrderData = (orderIngredients?: string[]) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  const burgerIngredients = useSelector(({ reactBurger }) => reactBurger.burgerIngredients.ingredients);
  const [restIngredientsLength, setRestIngredientsLength] = useState(0);

  const newIngredients = useMemo(() => {
    if (orderIngredients) {
      if (orderIngredients.length <= 5) return orderIngredients;

      if (orderIngredients.length > 5) {
        const [first, second, third, fourth, fifth, sixth, ...rest] = orderIngredients;
        setRestIngredientsLength(rest.length);
        return [first, second, third, fourth, fifth, sixth];
      }
    }
  }, [orderIngredients]);

  const filteredBurgerIngredients = useMemo(
    () => burgerIngredients.filter((ingredient) => orderIngredients?.includes(ingredient._id)),
    [orderIngredients, burgerIngredients],
  );

  const price = useMemo(
    () => filteredBurgerIngredients.reduce((prev, current) => prev + current.price, 0),
    [filteredBurgerIngredients],
  );

  const countedIngredientsWithPrice = useMemo(
    () =>
      filteredBurgerIngredients.map((ingredient) => ({
        id: ingredient._id,
        title: ingredient.name,
        price: ingredient.price,
        qty: orderIngredients?.filter((id) => id === ingredient._id).length,
        image: ingredientIconDict[ingredient._id],
      })),
    [filteredBurgerIngredients, orderIngredients],
  );

  return { newIngredients, restIngredientsLength, price, countedIngredientsWithPrice };
};
