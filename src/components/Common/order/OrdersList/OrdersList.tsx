import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import ScrollableContainer from '../../ScrollableContainer/ScrollableContainer';
import { useRequestOrders } from './useRequestOrders';
import { useSelector } from '../../../../hooks';

interface OrderListProps {
  orderCardVariant?: 'primary' | 'secondary';
}

const OrdersList: React.FC<OrderListProps> = ({ orderCardVariant = 'primary' }) => {
  useRequestOrders();
  const ingredients = useSelector(({ reactBurger }) => reactBurger.burgerIngredients.ingredients);

  return (
    <ScrollableContainer variant="primary">
      <OrderCard
        variant={orderCardVariant}
        orderTitle="test"
        orderStatus="Создан"
        orderIngredients={ingredients}
        orderNumber="123"
        orderPrice={550}
        date={new Date('2022-10-10T17:33:32.877Z')}
        onClick={() => console.info('click')}
      />
      <OrderCard
        variant={orderCardVariant}
        orderTitle="test"
        orderStatus="Выполнен"
        orderIngredients={ingredients}
        orderNumber="123"
        orderPrice={500}
        date={new Date('2022-10-10T17:33:32.877Z')}
        onClick={() => console.info('click')}
      />
      <OrderCard
        variant={orderCardVariant}
        orderTitle="test"
        orderStatus="Создан"
        orderIngredients={ingredients}
        orderNumber="123"
        orderPrice={500}
        date={new Date('2022-10-10T17:33:32.877Z')}
        onClick={() => console.info('click')}
      />
      <OrderCard
        variant={orderCardVariant}
        orderTitle="test"
        orderStatus="Создан"
        orderIngredients={ingredients}
        orderNumber="123"
        orderPrice={500}
        date={new Date('2022-10-10T17:33:32.877Z')}
        onClick={() => console.info('click')}
      />
    </ScrollableContainer>
  );
};

export default OrdersList;
