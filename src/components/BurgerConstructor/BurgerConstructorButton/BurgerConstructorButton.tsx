import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import { Modal } from '../../uikit';
import OrderDetails from '../../Common/OrderDetails/OrderDetails';

const BurgerConstructorButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  return (
    <>
      <Button type="primary" size="large" htmlType="button" onClick={handleClick}>
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
