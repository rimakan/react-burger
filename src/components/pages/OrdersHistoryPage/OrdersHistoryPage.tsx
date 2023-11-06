import React from 'react';
import OrdersList from '../../Common/order/OrdersList/OrdersList';
import s from './OrdersHistoryPage.module.scss';
import { useSelector } from '../../../hooks';
import { Spinner } from '../../uikit';

const OrdersHistoryPage: React.FC = () => {
  const orders = useSelector((s) => s.user.relatedData.personalOrders);
  return (
    <div className={s.ordersHistoryPage}>
      {orders?.length === 0 && (
        <span className={s.spinner}>
          <Spinner />
        </span>
      )}
      {orders && <OrdersList orders={orders} />}
    </div>
  );
};

export default OrdersHistoryPage;
