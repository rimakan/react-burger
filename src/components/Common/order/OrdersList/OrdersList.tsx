import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import ScrollableContainer from '../../ScrollableContainer/ScrollableContainer';
import { ExtendedOrder } from '../../../../models/backendEvents';

interface OrderListProps {
  orderCardVariant?: 'primary' | 'secondary';
  orders: ExtendedOrder[];
}

const OrdersList: React.FC<OrderListProps> = ({ orderCardVariant = 'primary', orders }) => {
  return (
    <ScrollableContainer variant="primary">
      {orders?.map(({ _id, name, number, status, ingredients, createdAt }) => {
        return (
          <OrderCard
            key={_id}
            variant={orderCardVariant}
            orderTitle={name}
            orderStatus={status}
            orderIngredients={ingredients}
            orderNumber={number}
            date={new Date(createdAt)}
            onClick={() => console.info('click')}
          />
        );
      })}
    </ScrollableContainer>
  );
};

export default OrdersList;
