import React from 'react';
import s from './ExtendedOrderDetails.module.scss';
import OrderTitle from '../OrderTitle/OrderTitle';
import OrderStatus from '../OrderStatus/OrderStatus';
import ScrollableContainer from '../../ScrollableContainer/ScrollableContainer';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderPrice from '../OrderPrice/OrderPrice';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../../../hooks';
import { Spinner } from '../../../uikit';
import { useOrderData } from '../../../../hooks';

const orderStatusDict: { [key: string]: string } = {
  created: 'Создан',
  pending: 'Готовится',
  done: 'Выполнен',
};

const ExtendedOrderDetails: React.FC = () => {
  const { orderId: orderIdFromUrl } = useParams();
  const orderId = Number(orderIdFromUrl);
  const order = useSelector(
    (s) =>
      s.reactBurger.orderFeed.publicOrders?.find((order) => order.number === orderId) ||
      s.user.relatedData.personalOrders?.find((order) => order.number === orderId),
  );
  const { price, countedIngredientsWithPrice } = useOrderData(order?.ingredients);

  return (
    <div className={s.extendedOrderDetails}>
      {!order && <Spinner />}
      {order && (
        <>
          <header>
            <h2 className="text text_type_digits-default">#{orderId}</h2>
          </header>
          <div className={s.extendedOrderDetails__subHeader}>
            <OrderTitle>{order.name}</OrderTitle>
            <OrderStatus status={orderStatusDict[order.status]} className="text text_type_main-small" />
          </div>
          <div className={s.extendedOrderDetails__ingredients}>
            <h3 className="text_type_main-medium">Состав:</h3>
            <ScrollableContainer variant="secondary">
              {countedIngredientsWithPrice.map(({ id, title, price, qty, image }) => (
                <div key={id} className={s.extendedOrderDetails__ingredients__item}>
                  <div className={s.previewBox}>
                    <img src={image} alt={title} />
                    <p className="text text_type_main-default">{title}</p>
                  </div>
                  <div className={s.priceBox}>
                    <p className="text text_type_digits-default">{qty} x</p>
                    <OrderPrice orderSum={price} />
                  </div>
                </div>
              ))}
            </ScrollableContainer>
          </div>
          <footer>
            <FormattedDate date={new Date(order.createdAt)} className="text_type_main-default text_color_inactive" />
            <OrderPrice orderSum={price} />
          </footer>
        </>
      )}
    </div>
  );
};

export default ExtendedOrderDetails;
