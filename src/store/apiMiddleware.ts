import { Middleware } from 'redux';
import { refreshAccessToken } from './auth/auth';
import { AppDispatch, StoreState } from './store';
import { getUser } from './user/user';

export const apiMiddleware: Middleware<
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  StoreState
> = (storeApi) => (next) => (action) => {
  if (action.type === 'reactBurger/user/getUser/rejected') {
    (storeApi.dispatch as AppDispatch)(refreshAccessToken());
    (storeApi.dispatch as AppDispatch)(getUser());
  }

  if (action.type === 'reactBurger/auth/refreshAccessToken/rejected') {
    localStorage.clear();
    (storeApi.dispatch as AppDispatch)(refreshAccessToken());
    (storeApi.dispatch as AppDispatch)(getUser());
  }

  next(action);
};
