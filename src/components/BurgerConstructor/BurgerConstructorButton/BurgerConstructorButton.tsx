import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Modal } from '../../uikit';
import OrderDetails from '../../Common/order/OrderDetails/OrderDetails';
import { useDispatch, useSelector } from '../../../hooks';
import { cleanupConstructor, createOrder } from '../../../store/reactBurger/constructorSlice/constructorSlice';
import { useModal } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

const BurgerConstructorButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.user.user);

  const {
    burgerConstructorIngredients,
    isBunPresent,
    relatedData: { order },
  } = useSelector(({ reactBurger }) => reactBurger.burgerConstructor);
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleClickOpenModal = () => {
    if (user) {
      dispatch(createOrder(burgerConstructorIngredients));
      openModal();
    } else {
      navigate('/login');
    }
  };

  const handleClickCloseModal = () => {
    closeModal();
    dispatch(cleanupConstructor());
  };
  return (
    <>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={handleClickOpenModal}
        disabled={!isBunPresent && !!burgerConstructorIngredients}
      >
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal onClick={handleClickCloseModal}>
          <OrderDetails orderId={order?.order.number} />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructorButton;
