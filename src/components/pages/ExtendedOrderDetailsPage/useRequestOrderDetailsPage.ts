import { useEffect } from 'react';
import { wsClientFirst, wsClientSecond } from '../../../store/middlewares/wsMiddleware';
import { useDispatch, useSelector } from '../../../hooks';
import { getBurgerIngredients } from '../../../store/reactBurger/ingredientsSlice/ingredientsSlice';

const wsClients = [wsClientFirst, wsClientSecond];

export const useRequestOrderDetailsPage = () => {
  const dispatch = useDispatch();
  const publicOrders = useSelector((s) => s.reactBurger.orderFeed.publicOrders);
  const personalOrders = useSelector((s) => s.user.relatedData.personalOrders);

  useEffect(() => {
    if (publicOrders?.length === 0 && personalOrders?.length === 0) {
      dispatch(getBurgerIngredients());
      wsClients.forEach((client) => {
        client.open();
      });

      return () => {
        wsClients.forEach((client) => {
          client.close();
        });
      };
    }
  }, [publicOrders, personalOrders, dispatch]);
};
