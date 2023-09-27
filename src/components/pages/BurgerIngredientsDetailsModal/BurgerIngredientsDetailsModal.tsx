import React, { useContext, useMemo } from 'react';
import { Modal } from '../../uikit';
import IngredientDetails from '../../Common/IngredientDetails/IngredientDetails';
import { IngredientsContext } from '../StellarBurgerMainPage';

const BurgerIngredientsDetailsModal: React.FC = () => {
  const [ingredients, ingredientId, , handleClickOpenModal] =
    useContext(IngredientsContext);

  const product = useMemo(
    () => ingredients.find(({ _id }) => _id === ingredientId),
    [ingredients, ingredientId],
  );

  return (
    <>
      {product && (
        <Modal onClick={handleClickOpenModal} heading="Детали ингредиента">
          <IngredientDetails product={product} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredientsDetailsModal;
