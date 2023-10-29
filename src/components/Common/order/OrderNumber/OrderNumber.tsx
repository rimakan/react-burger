import React from 'react';
import s from './OrderNumber.module.scss';
import cn from 'classnames';
import { OrderStatusType } from '../../../../models/order';

interface OrderNumberProps {
  status: string;
  orderNumber: string;
}

const OrderNumber: React.FC<OrderNumberProps> = ({ orderNumber, status }) => {
  const classNames = cn(s.orderNumber, 'text text_type_digits-default', {
    [s.orderNumber_inProgress]: status === OrderStatusType.InProgress,
    [s.orderNumber_done]: status === OrderStatusType.Ready,
  });
  return <p className={classNames}>{orderNumber}</p>;
};

export default OrderNumber;
