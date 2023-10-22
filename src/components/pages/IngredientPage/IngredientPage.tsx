import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../../hooks';
import { useRequestStellarBurgerMainPage } from '../StellarBurgerMainPage/useRequestStellarBurgerMainPage';
import IngredientDetails from '../../Common/IngredientDetails/IngredientDetails';
import s from './IngredientPage.module.scss';

const IngredientPage: React.FC = () => {
  useRequestStellarBurgerMainPage();

  const { id: ingredientId } = useParams();
  const product = useSelector(
    ({ reactBurger }) => reactBurger.burgerIngredients.ingredients.find(({ _id }) => ingredientId === _id) ?? null,
  );

  return (
    <section>
      {product ? (
        <IngredientDetails product={product} extraClassName={s.ingredientPage} />
      ) : (
        <h2 className="text text_type_main-medium">Ингредиент не найден</h2>
      )}
    </section>
  );
};

export default IngredientPage;
