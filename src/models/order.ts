export interface Order {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
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
