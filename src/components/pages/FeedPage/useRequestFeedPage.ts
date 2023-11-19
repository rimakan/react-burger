import { useEffect } from 'react';
import { wsClientFirst } from '../../../store/middlewares/wsMiddleware';

export const useRequestFeedPage = () => {
  useEffect(() => {
    wsClientFirst.open();

    return () => {
      wsClientFirst.close();
    };
  }, []);
};
