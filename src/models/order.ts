export interface Order {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}

export interface ExtendedOrder {
  _id: string;
  name: string;
  number: number;
  status: string;
  ingredients: string[];
  createdAt: string;
  updatedAt: string;
}

export enum OrderStatusType {
  Created = 'Создан',
  Pending = 'Готовится',
  Done = 'Выполнен',
}

export enum OrderState {
  Created = 'created',
  Pending = 'pending',
  Done = 'done',
}
