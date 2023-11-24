import React from 'react';
import cn from 'classnames';
import { OrderStatusType } from '../../../../models/order';
import s from './OrderStatus.module.scss';

interface OrderStatusProps {
  status?: string;
  className?: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ status, className }) => {
  const classNames = cn(s.orderStatus, className || 'text text_type_main-medium', {
    [s.orderStatus_inProgress]: status === OrderStatusType.Created || status === OrderStatusType.Pending,
    [s.orderStatus_done]: status === OrderStatusType.Done,
  });
  return <p className={classNames}>{status}</p>;
};

export default OrderStatus;
