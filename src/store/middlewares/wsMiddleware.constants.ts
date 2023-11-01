import { createAction } from '@reduxjs/toolkit';
import { OrderEvent } from '../../models/backendEvents';

export const wsActions = {
  getAllOrders: createAction<OrderEvent>('reactBurger/ws/getAllOrders'),
  getPersonalOrders: createAction<OrderEvent>('reactBurger/ws/getPersonalOrders'),
};
