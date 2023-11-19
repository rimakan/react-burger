import React from 'react';
import { Modal } from '../../../uikit';
import IngredientDetails from '../../../Common/IngredientDetails/IngredientDetails';
import { useDispatch, useSelector } from '../../../../hooks';
import { closeIngredientDialog } from '../../../../store/reactBurger/ingredientsSlice/ingredientsSliceActions';
import { useNavigate } from 'react-router-dom';

const BurgerIngredientsDetailsModal: React.FC = () => {
  const navigate = useNavigate();
  const product = useSelector(({ reactBurger }) =>
    reactBurger.burgerIngredients.ingredients.find(
      ({ _id }) => _id === reactBurger.burgerIngredientsActions.ingredientId,
    ),
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(closeIngredientDialog());
    navigate('/');
  };

  return (
    <>
      {product && (
        <Modal onClick={clickHandler} heading={<h2 className="text text_type_main-large">Детали ингредиента</h2>}>
          <IngredientDetails product={product} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredientsDetailsModal;
