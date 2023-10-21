import React, { forwardRef, useMemo } from 'react';
import s from './BurgerIngredientsList.module.scss';
import IngredientCard from '../../../Common/IngredientCard/IngredientCard';
import { useDispatch, useSelector } from '../../../../hooks';
import { openIngredientDialog } from '../../../../store/reactBurger/ingredientsSlice/ingredientsSliceActions';
import { useNavigate } from 'react-router-dom';

interface BurgerIngredientsListProps {
  type: string;
  header: string;
  ref: React.ForwardedRef<HTMLDivElement | null>;
  id: string;
}

const BurgerIngredientsList: React.FC<BurgerIngredientsListProps> = forwardRef(({ header, type, id }, ref) => {
  const navigate = useNavigate();
  const ingredients = useSelector(({ reactBurger }) => reactBurger.burgerIngredients.ingredients);
  const burgerConstructorIngredients = useSelector(
    ({ reactBurger }) => reactBurger.burgerConstructor.burgerConstructorIngredients,
  );

  const getIngredientCount = useMemo(
    () => (id: string) => {
      return burgerConstructorIngredients.filter(({ _id }) => _id === id).length;
    },
    [burgerConstructorIngredients],
  );

  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    dispatch(openIngredientDialog(id));
    navigate(`/ingredients/${id}`);
  };

  return (
    <div className={s.burgerIngredientsList} id={id} ref={ref}>
      <header className="pb-6">
        <h2 className="text text_type_main-medium">{header}</h2>
      </header>
      <div className={s.list}>
        {ingredients
          .filter((ingredient) => ingredient.type === type)
          .map((ingredient) => {
            return (
              <IngredientCard
                key={`${ingredient._id}`}
                count={getIngredientCount(ingredient._id)}
                itemImage={ingredient.image}
                itemTitle={ingredient.name}
                itemPrice={ingredient.price}
                ingredient={ingredient}
                onClick={() => handleClick(ingredient._id)}
              />
            );
          })}
      </div>
    </div>
  );
});

export default BurgerIngredientsList;
