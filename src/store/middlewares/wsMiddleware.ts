/* eslint-disable spellcheck/spell-checker */
import { Middleware, Action } from 'redux';
import { authenticate, login, logout } from '../auth/auth';
import { StoreState } from '../store';
import { WsClient } from '../../api/WsClient';
import { getEventMessage, prepareWsAction } from '../../components/utils/wsUtils';
import { WS_URL } from '../../constants/constants';

const accessToken = localStorage.getItem('accessToken')?.slice(7);

const wsClientFirst = new WsClient(`${WS_URL}/all`);
const wsClientSecond = new WsClient(`${WS_URL}?token=${accessToken}`);

export const wsMiddleware: Middleware<object, StoreState> = (storeApi) => {
  wsClientFirst.onMessage = (event: MessageEvent<string>) => {
    const eventTitle = wsClientFirst.getEventTitle();
    const message = getEventMessage(eventTitle, event);
    const wsAction = prepareWsAction(wsClientFirst, event);

    if (wsAction) {
      storeApi.dispatch(wsAction(message));
    }
  };

  wsClientSecond.onMessage = (event: MessageEvent<string>) => {
    const eventTitle = wsClientSecond.getEventTitle();
    const message = getEventMessage(eventTitle, event);
    const wsAction = prepareWsAction(wsClientSecond, event);

    if (wsAction) {
      storeApi.dispatch(wsAction(message));
    }
  };

  return (next) => (action: Action) => {
    wsClientFirst.open();

    if (action.type === login.fulfilled.type || action.type === authenticate.fulfilled.type || accessToken) {
      wsClientSecond.open();
    }

    if (action.type === logout.fulfilled.type) {
      wsClientFirst.close();
      wsClientSecond.close();
    }

    return next(action);
  };
};
