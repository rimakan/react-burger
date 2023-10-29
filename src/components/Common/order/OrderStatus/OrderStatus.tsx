import React from 'react';
import cn from 'classnames';
import { OrderStatusType } from '../../../../models/order';
import s from './OrderStatus.module.scss';

interface OrderStatusProps {
  status?: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  const classNames = cn(s.orderStatus, 'text text_type_main-medium', {
    [s.orderStatus_inProgress]: status === OrderStatusType.Created || status === OrderStatusType.InProgress,
    [s.orderStatus_done]: status === OrderStatusType.Ready,
  });
  return <p className={classNames}>{status}</p>;
};

export default OrderStatus;
