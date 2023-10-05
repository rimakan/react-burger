import React from 'react';
import { Modal } from '../../../uikit';
import IngredientDetails from '../../../Common/IngredientDetails/IngredientDetails';
import { useDispatch, useSelector } from '../../../../hooks';
import { closeIngredientDialog } from '../../../../store/reactBurger/ingredientsSlice/ingredientsSliceActions';

const BurgerIngredientsDetailsModal: React.FC = () => {
  const product = useSelector(({ reactBurger }) =>
    reactBurger.burgerIngredients.ingredients.find(
      ({ _id }) => _id === reactBurger.burgerIngredientsActions.ingredientId,
    ),
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(closeIngredientDialog());
  };

  return (
    <>
      {product && (
        <Modal onClick={clickHandler} heading="Детали ингредиента">
          <IngredientDetails product={product} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredientsDetailsModal;
