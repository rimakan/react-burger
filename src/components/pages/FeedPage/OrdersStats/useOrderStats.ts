import { useSelector } from '../../../../hooks';

export const useOrderStats = (status: string) => {
  const orders = useSelector(({ reactBurger }) => reactBurger.orderFeed.publicOrders);

  return orders
    ?.filter((order) => order.status === status)
    .map((order) => ({
      id: order._id,
      status: order.status,
      orderNumber: order.number,
    }));
};
