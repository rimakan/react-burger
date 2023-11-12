import { ExtendedOrder } from './order';

export interface OrderEvent {
  eventTitle: string;
  orders: ExtendedOrder[];
  success: boolean;
  total: number;
  totalToday: number;
}
