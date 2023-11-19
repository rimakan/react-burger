import React from 'react';
import s from './ExtendedOrderDetails.module.scss';
import OrderTitle from '../OrderTitle/OrderTitle';
import OrderStatus from '../OrderStatus/OrderStatus';
import ScrollableContainer from '../../ScrollableContainer/ScrollableContainer';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderPrice from '../OrderPrice/OrderPrice';
import { Spinner } from '../../../uikit';
import { useOrderData } from '../../../../hooks';
import { ExtendedOrder } from '../../../../models/order';
import cn from 'classnames';

const orderStatusDict: { [key: string]: string } = {
  created: 'Создан',
  pending: 'Готовится',
  done: 'Выполнен',
};

interface ExtendedOrderDetailsProps {
  order?: ExtendedOrder;
  isModal?: boolean;
}

const ExtendedOrderDetails: React.FC<ExtendedOrderDetailsProps> = ({ order, isModal }) => {
  const { price, countedIngredientsWithPrice } = useOrderData(order?.ingredients);
  const classNames = cn(s.extendedOrderDetails, {
    [s.extendedOrderDetails_modal]: isModal,
  });

  return (
    <div className={classNames}>
      {!order && <Spinner />}
      {order && (
        <>
          {!isModal && (
            <header>
              <h2 className="text text_type_digits-default">#{order.number}</h2>
            </header>
          )}

          <div className={s.extendedOrderDetails__subHeader}>
            <OrderTitle>{order.name}</OrderTitle>
            <OrderStatus status={orderStatusDict[order.status]} className="text text_type_main-small" />
          </div>
          <div className={s.extendedOrderDetails__ingredients}>
            <h3 className="text_type_main-medium">Состав:</h3>
            <ScrollableContainer variant={isModal ? 'tertiary' : 'secondary'}>
              {countedIngredientsWithPrice.map(({ id, title, price, qty, image }) => (
                <div key={id} className={s.extendedOrderDetails__ingredientsItem}>
                  <div className={s.previewBox}>
                    <img src={image} alt={title} />
                    <p className="text text_type_main-default">{title}</p>
                  </div>
                  <div className={s.priceBox}>
                    <p className="text text_type_digits-default">{qty}</p>
                    <span className="text text_type_digits-default">x</span>
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
