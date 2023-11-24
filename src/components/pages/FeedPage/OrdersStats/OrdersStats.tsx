import React from 'react';
import s from './OrderStats.module.scss';
import OrderNumbersList from '../../../Common/order/OrderNumbersList/OrderNumbersList';
import { OrderState } from '../../../../models/order';
import OrderQuantity from '../../../Common/order/OrderQuanitity/OrderQuantity';
import { useSelector } from '../../../../hooks';
import { useOrderStats } from './useOrderStats';

const OrdersStats: React.FC = () => {
  const totalOrdersCounter = useSelector(({ reactBurger }) => reactBurger.orderFeed.totalOrdersCount);
  const todayOrdersCounter = useSelector(({ reactBurger }) => reactBurger.orderFeed.todayOrdersCount);
  const readyOrders = useOrderStats(OrderState.Done);
  const ordersInProgress = useOrderStats(OrderState.Pending);

  return (
    <div className={s.orderStats}>
      <div className={s.orderStats__orderNumbersBox}>
        {readyOrders && ordersInProgress && (
          <>
            <OrderNumbersList orders={readyOrders} header="Готовы:" />
            <OrderNumbersList orders={ordersInProgress} header="В работе:" />
          </>
        )}
      </div>
      <div>
        <OrderQuantity header="Выполнено за все время: " orderQty={totalOrdersCounter} />
        <OrderQuantity header="Выполнено за сегодня: " orderQty={todayOrdersCounter} />
      </div>
    </div>
  );
};

export default OrdersStats;
