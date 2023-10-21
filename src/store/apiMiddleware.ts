import { Middleware } from 'redux';
import { refreshAccessToken } from './auth/auth';
import { AppDispatch, StoreState } from './store';

export const apiMiddleware: Middleware<
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  StoreState
> = (storeApi) => (next) => (action) => {
  if (action.type === 'reactBurger/user/getUser/rejected' || action.type === 'reactBurger/auth/rejected') {
    const token = localStorage.getItem('refreshToken');
    if (token) {
      (storeApi.dispatch as AppDispatch)(refreshAccessToken(token));
    }
  }

  next(action);
};
