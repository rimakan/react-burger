import React from 'react';
import s from './OrderNumbersList.module.scss';
import OrderNumber from '../OrderNumber/OrderNumber';

interface OrderNumbersListProps {
  header: string;
  orders: {
    id: string;
    status: string;
    orderNumber: number;
  }[];
}

const OrderNumbersList: React.FC<OrderNumbersListProps> = ({ header, orders }) => {
  return (
    <div className={s.orderNumbersList}>
      <h3 className="text text_type_main-medium">{header}</h3>
      <ul className="custom-scroll">
        {orders.map(({ id, status, orderNumber }) => {
          return (
            <li key={id}>
              <OrderNumber status={status} orderNumber={orderNumber} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrderNumbersList;
