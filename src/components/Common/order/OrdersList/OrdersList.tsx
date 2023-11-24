import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import ScrollableContainer from '../../ScrollableContainer/ScrollableContainer';
import { ExtendedOrder } from '../../../../models/order';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from '../../../../hooks';
import { openOrderDialog } from '../../../../store/reactBurger/orderFeedSlice/orderFeedActionsSlice';

interface OrderListProps {
  orderCardVariant?: 'primary' | 'secondary';
  orders: ExtendedOrder[];
}

const OrdersList: React.FC<OrderListProps> = ({ orderCardVariant = 'primary', orders }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const location = useLocation();

  const clickHandler = (order: ExtendedOrder) => {
    dispatch(openOrderDialog(order));
    navigate(`${pathname}/${order.number}`, { state: { backgroundLocation: location } });
  };

  return (
    <ScrollableContainer variant="primary">
      {orders?.map((order) => {
        const { _id, name, number, status, ingredients, createdAt } = order;
        return (
          <OrderCard
            key={_id}
            variant={orderCardVariant}
            orderTitle={name}
            orderStatus={status}
            orderIngredients={ingredients}
            orderNumber={number}
            date={new Date(createdAt)}
            onClick={() => clickHandler(order)}
          />
        );
      })}
    </ScrollableContainer>
  );
};

export default OrdersList;
