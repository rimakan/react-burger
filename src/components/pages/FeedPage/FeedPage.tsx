import React from 'react';
import OrderCard from '../../Common/OrderCard/OrderCard';
import { useSelector } from '../../../hooks';
import { useRequestStellarBurgerMainPage } from '../StellarBurgerMainPage/useRequestStellarBurgerMainPage';

const date = '2022-10-10T17:33:32.877Z';

const FeedPage = () => {
  const ingredients = useSelector(({ reactBurger }) => reactBurger.burgerIngredients.ingredients);
  useRequestStellarBurgerMainPage();

  return (
    <div>
      <OrderCard
        orderTitle="test"
        orderStatus="Создан"
        orderIngredients={ingredients}
        orderNumber="123"
        orderPrice={500}
        date={new Date(date)}
        onClick={() => console.info('click')}
      />
    </div>
  );
};

export default FeedPage;
