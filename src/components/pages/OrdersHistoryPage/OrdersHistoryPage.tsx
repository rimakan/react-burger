import React from 'react';
import OrdersList from '../../Common/order/OrdersList/OrdersList';
import s from './OrdersHistoryPage.module.scss';

const OrdersHistoryPage: React.FC = () => {
  return (
    <div className={s.ordersHistoryPage}>
      <OrdersList />
    </div>
  );
};

export default OrdersHistoryPage;
