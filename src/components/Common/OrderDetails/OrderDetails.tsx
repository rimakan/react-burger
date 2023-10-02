import React from 'react';
import s from './OrderDetails.module.scss';
import acceptedIcon from '../../../icons/acceptedIcon.svg';
import { Spinner } from '../../uikit';

interface OrderDetailsProps {
  orderId?: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId }) => {
  const className = 'text text_type_main-default';
  return (
    <div className={s.orderDetails}>
      <section className={s.orderNumberBox}>
        {orderId ? <p className={`${s.orderNumberBox__id} text text_type_digits-large`}>{orderId}</p> : <Spinner />}
        <p className="text text_type_main-medium">идентификатор заказа</p>
      </section>
      <img src={acceptedIcon} />
      <footer>
        <p className={className}>Ваш заказ начали готовить</p>
        <p className={`${className} text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
      </footer>
    </div>
  );
};

export default OrderDetails;
