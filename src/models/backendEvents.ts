export interface ExtendedOrder {
  _id: string;
  name: string;
  status: string;
  ingredients: string[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderEvent {
  eventTitle: string;
  orders: ExtendedOrder[];
  success: boolean;
  total: number;
  totalToday: number;
}