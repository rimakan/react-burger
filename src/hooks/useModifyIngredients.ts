import { useMemo, useState } from 'react';
import { Product } from '../models/product';

export const useModifyIngredients = (ingredients: Product[]) => {
  const [restIngredientsLength, setRestIngredientsLength] = useState(0);

  const newIngredients = useMemo(() => {
    if (ingredients.length <= 5) return ingredients;

    if (ingredients.length > 5) {
      const [first, second, third, fourth, fifth, sixth, ...rest] = ingredients;
      setRestIngredientsLength(rest.length);
      return [first, second, third, fourth, fifth, sixth];
    }
  }, [ingredients]);

  return { newIngredients, restIngredientsLength };
};
