import React from 'react';
import s from './BurgerConstructorFooter.module.scss';
import BurgerConstructorButton from '../BurgerConstructorButton/BurgerConstructorButton';
import OrderPrice from '../../Common/order/OrderPrice/OrderPrice';

interface BurgerConstructorFooterProps {
  orderSum: number;
}

const BurgerConstructorFooter: React.FC<BurgerConstructorFooterProps> = ({ orderSum }) => {
  return (
    <div className={s.burgerConstructorFooter}>
      <OrderPrice orderSum={orderSum} />
      <BurgerConstructorButton />
    </div>
  );
};

export default BurgerConstructorFooter;
