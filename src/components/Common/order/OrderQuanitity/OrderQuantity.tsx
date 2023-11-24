import React from 'react';
import s from './OrderQuantity.module.scss';

interface OrderQuantityProps {
  header: string;
  orderQty: number;
}

const OrderQuantity: React.FC<OrderQuantityProps> = ({ header, orderQty }) => {
  return (
    <div className={s.orderQuantity}>
      <h3 className="text text_type_main-medium">{header}</h3>
      <p className="text text_type_digits-large">{orderQty}</p>
    </div>
  );
};

export default OrderQuantity;
