import { OrderStatusType } from '../../../../models/order';

const getRandomNumber = () => Math.trunc(Math.random() * 100000);

export const orderNumbers = [
  {
    id: 1,
    status: OrderStatusType.InProgress,
    orderNumber: `${getRandomNumber()}`,
  },
  {
    id: 2,
    status: OrderStatusType.InProgress,
    orderNumber: `${getRandomNumber()}`,
  },
  {
    id: 3,
    status: OrderStatusType.InProgress,
    orderNumber: `${getRandomNumber()}`,
  },
  {
    id: 4,
    status: OrderStatusType.Ready,
    orderNumber: `${getRandomNumber()}`,
  },
  {
    id: 5,
    status: OrderStatusType.Ready,
    orderNumber: `${getRandomNumber()}`,
  },
];
