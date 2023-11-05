import React from 'react';
import s from './OrderStats.module.scss';
import OrderNumbersList from '../../../Common/order/OrderNumbersList/OrderNumbersList';
import { OrderStatusType } from '../../../../models/order';
import OrderQuantity from '../../../Common/order/OrderQuanitity/OrderQuantity';

const OrdersStats: React.FC = () => {
  return (
    <div className={s.orderStats}>
      <div className={s.orderStats__orderNumbersBox}>
        {/* <OrderNumbersList orderNumbers={getFilteredOrderNumbers(OrderStatusType.Done)} header="Готовы:" />
        <OrderNumbersList orderNumbers={getFilteredOrderNumbers(OrderStatusType.Pending)} header="В работе:" /> */}
      </div>
      <div>
        <OrderQuantity header="Выполнено за все время: " orderQty="28500" />
        <OrderQuantity header="Выполнено за сегодня: " orderQty="150" />
      </div>
    </div>
  );
};

export default OrdersStats;
