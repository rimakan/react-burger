/* eslint-disable spellcheck/spell-checker */
import { Middleware, Action } from 'redux';
import { StoreState } from '../store';
import { WsClient } from '../../api/WsClient';
import { getEventMessage, prepareWsAction } from '../../components/utils/wsUtils';
import { WS_URL } from '../../constants/constants';

const accessToken = localStorage.getItem('accessToken')?.slice(7);

export const wsClientFirst = new WsClient(`${WS_URL}/all`);
export const wsClientSecond = new WsClient(`${WS_URL}?token=${accessToken}`);

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
    return next(action);
  };
};
