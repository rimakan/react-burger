import React from 'react';
import s from './ExtendedOrderDetails.module.scss';
import OrderTitle from '../OrderTitle/OrderTitle';
import OrderStatus from '../OrderStatus/OrderStatus';
import { OrderStatusType } from '../../../../models/order';
import ScrollableContainer from '../../ScrollableContainer/ScrollableContainer';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderPrice from '../OrderPrice/OrderPrice';

const ExtendedOrderDetails: React.FC = () => {
  return (
    <div className={s.extendedOrderDetails}>
      <header>
        <h2 className="text_type_main-default">123</h2>
      </header>
      <div className={s.extendedOrderDetails__subHeader}>
        <OrderTitle>Test</OrderTitle>
        <OrderStatus status={OrderStatusType.Done} className="text text_type_main-small" />
      </div>
      <div className={s.extendedOrderDetails__ingredients}>
        <h3 className="text_type_main-medium">Состав:</h3>
        <ScrollableContainer variant="secondary">da</ScrollableContainer>
      </div>
      <footer>
        <FormattedDate date={new Date()} className="text_type_main-default text_color_inactive" />
        <OrderPrice orderSum={550} />
      </footer>
    </div>
  );
};

export default ExtendedOrderDetails;
