import React from 'react';
import OrdersList from '../../Common/order/OrdersList/OrdersList';
import s from './OrdersHistoryPage.module.scss';
import { useSelector } from '../../../hooks';
import { Spinner } from '../../uikit';
import { useRequestOrdersHistoryPage } from './useRequestOrdersHistoryPage';

const OrdersHistoryPage: React.FC = () => {
  useRequestOrdersHistoryPage();
  const orders = useSelector((s) => s.user.relatedData.personalOrders);

  return (
    <div className={s.ordersHistoryPage}>
      {!orders?.length && (
        <span className={s.spinner}>
          <Spinner />
        </span>
      )}
      {orders && <OrdersList orders={orders} />}
    </div>
  );
};

export default OrdersHistoryPage;
