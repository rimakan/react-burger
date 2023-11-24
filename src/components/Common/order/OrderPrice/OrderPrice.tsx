import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import s from './OrderPrice.module.scss';

interface OrderPriceProps {
  orderSum: number;
}

const OrderPrice: React.FC<OrderPriceProps> = ({ orderSum }) => {
  return (
    <div className={s.orderPrice}>
      <p className="text text_type_digits-default">{orderSum}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default OrderPrice;
