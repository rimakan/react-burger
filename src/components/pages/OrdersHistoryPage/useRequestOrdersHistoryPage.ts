import { useEffect } from 'react';
import { wsClientSecond } from '../../../store/middlewares/wsMiddleware';

export const useRequestOrdersHistoryPage = () => {
  useEffect(() => {
    wsClientSecond.open();

    return () => {
      wsClientSecond.close();
    };
  }, []);
};
