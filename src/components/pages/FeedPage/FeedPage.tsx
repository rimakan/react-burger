import React from 'react';
import s from './FeedPage.module.scss';
import OrdersList from '../../Common/order/OrdersList/OrdersList';
import PageSection from '../../Common/PageSection/PageSection';
import OrdersStats from './OrdersStats/OrdersStats';

const FeedPage: React.FC = () => {
  return (
    <div className={s.feedPage}>
      <PageSection header="Лента заказов">
        <OrdersList orderCardVariant="secondary" />
      </PageSection>
      <OrdersStats />
    </div>
  );
};

export default FeedPage;
