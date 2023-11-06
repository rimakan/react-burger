import React from 'react';
import s from './OrderNumber.module.scss';
import cn from 'classnames';
import { OrderState } from '../../../../models/order';

interface OrderNumberProps {
  status: string;
  orderNumber: number;
}

const OrderNumber: React.FC<OrderNumberProps> = ({ orderNumber, status }) => {
  const classNames = cn(s.orderNumber, 'text text_type_digits-default', {
    [s.orderNumber_inProgress]: status === OrderState.Pending,
    [s.orderNumber_done]: status === OrderState.Done,
  });
  return <p className={classNames}>{orderNumber}</p>;
};

export default OrderNumber;
