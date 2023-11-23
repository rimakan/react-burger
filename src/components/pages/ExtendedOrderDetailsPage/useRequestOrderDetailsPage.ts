import { useEffect, useMemo } from 'react';
import { wsClientFirst, wsClientSecond } from '../../../store/middlewares/wsMiddleware';
import { useDispatch, useSelector } from '../../../hooks';
import { cleanupIngredients, getBurgerIngredients } from '../../../store/reactBurger/ingredientsSlice/ingredientsSlice';
import { useLocation } from 'react-router-dom';

export const useRequestOrderDetailsPage = () => {
  const dispatch = useDispatch();
  const publicOrders = useSelector((s) => s.reactBurger.orderFeed.publicOrders);
  const personalOrders = useSelector((s) => s.user.relatedData.personalOrders);
  const { pathname } = useLocation();
  const subDomain = useMemo(() => pathname.split('/')[1], [pathname]);

  useEffect(() => {
    dispatch(getBurgerIngredients());
    if (subDomain === 'feed') {
      wsClientFirst.open();
    }

    if (subDomain === 'profile') {
      wsClientSecond.open();

      return () => {
        wsClientSecond.close();
      };
    }

    return () => {
      dispatch(cleanupIngredients());
      wsClientFirst.close();
    };
  }, [publicOrders, personalOrders, dispatch, subDomain]);
};
