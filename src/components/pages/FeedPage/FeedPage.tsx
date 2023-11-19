import React from 'react';
import s from './FeedPage.module.scss';
import OrdersList from '../../Common/order/OrdersList/OrdersList';
import PageSection from '../../Common/PageSection/PageSection';
import OrdersStats from './OrdersStats/OrdersStats';
import { useSelector } from '../../../hooks';
import { Spinner } from '../../uikit';
import ExtendedOrderDialog from '../../Common/order/ExtendedOrderDialog/ExtendedOrderDialog';

const FeedPage: React.FC = () => {
  const orders = useSelector(({ reactBurger }) => reactBurger.orderFeed.publicOrders);

  return (
    <div className={s.feedPage}>
      <PageSection header="Лента заказов">
        {orders?.length === 0 && (
          <span className={s.spinner}>
            <Spinner />
          </span>
        )}
        {orders && <OrdersList orderCardVariant="secondary" orders={orders} />}
      </PageSection>
      <OrdersStats />
      <ExtendedOrderDialog />
    </div>
  );
};

export default FeedPage;
