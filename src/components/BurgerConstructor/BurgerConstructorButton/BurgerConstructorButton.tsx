import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import { Modal } from '../../uikit';
import OrderDetails from '../../Common/OrderDetails/OrderDetails';
import { useDispatch, useSelector } from '../../../hooks';
import { cleanupConstructor } from '../../../store/reactBurger/constructorSlice/constructorSlice';

const BurgerConstructorButton: React.FC = () => {
  const dispatch = useDispatch();
  const burgerConstructorIngredients = useSelector(
    ({ reactBurger }) => reactBurger.burgerConstructor.burgerConstructorIngredients,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen((prevState) => !prevState);
    dispatch(cleanupConstructor());
  };
  return (
    <>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={handleClick}
        disabled={burgerConstructorIngredients.length === 0}
      >
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal onClick={handleClick}>
          <OrderDetails orderId="034536" />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructorButton;
