import React from 'react';
import ExtendedOrderDetails from '../../Common/order/ExtendedOrderDetails/ExtendedOrderDetails';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../../hooks';

const ExtendedOrderDetailsPage: React.FC = () => {
  const { orderId: orderIdFromUrl } = useParams();
  const orderId = Number(orderIdFromUrl);
  const order = useSelector(
    (s) =>
      s.user.relatedData.personalOrders?.find(({ number }) => number === orderId) ||
      s.reactBurger.orderFeed.publicOrders?.find(({ number }) => number === orderId),
  );
  return (
    <>
      <ExtendedOrderDetails order={order} />
    </>
  );
};

export default ExtendedOrderDetailsPage;
