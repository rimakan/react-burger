import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { wsActions } from '../../store/middlewares/wsMiddleware.constants';
import { WsClient } from '../../api/WsClient';

type WsActions = { [key: string]: ActionCreatorWithPayload<unknown> };

export const getEventMessage = (eventTitle: string, event: MessageEvent<string>) => {
  return {
    eventTitle,
    ...JSON.parse(event.data),
  };
};

export const prepareWsAction = (wsClient: WsClient, event: MessageEvent<string>) => {
  const eventTitle = wsClient.getEventTitle();
  const message = getEventMessage(eventTitle, event);
  return (wsActions as WsActions)[message.eventTitle];
};
