import React from 'react';
import s from './OrderCard.module.scss';
import { Product } from '../../../../models/product';
import cn from 'classnames';
import OrderPrice from '../OrderPrice/OrderPrice';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientPreviewImg from '../../IngredientPreviewImg/IngredientPreviewImg';
import { ingredientIconDict } from '../../IngredientPreviewImg/IngredientPreviewImg.constants';
import { useModifyIngredients } from '../../../../hooks/useModifyIngredients';
import OrderTitle from '../OrderTitle/OrderTitle';
import OrderStatus from '../OrderStatus/OrderStatus';

interface OrderCardProps {
  variant?: 'primary' | 'secondary';
  orderStatus?: string;
  orderNumber: string;
  date: Date;
  orderTitle: string;
  orderIngredients: Product[];
  orderPrice: number;
  onClick: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  variant = 'primary',
  orderStatus,
  orderNumber,
  date,
  orderTitle,
  orderIngredients,
  orderPrice,
  onClick,
}) => {
  const classNames = cn(s.orderCard, {
    [s.orderCard_primary]: variant === 'primary',
    [s.orderCard_secondary]: variant === 'secondary',
  });

  const { newIngredients, restIngredientsLength } = useModifyIngredients(orderIngredients);

  return (
    <div className={classNames} onClick={onClick}>
      <header>
        <p className="text text_type_main-default">{orderNumber}</p>
        <FormattedDate date={date} className="text text_type_main-default text_color_inactive" />
      </header>
      <div className={s.orderCard__subHeader}>
        <OrderTitle>{orderTitle}</OrderTitle>
        {variant === 'primary' && <OrderStatus status={orderStatus} />}
      </div>

      <div className={s.orderCard__details}>
        <div className={s.orderCard__ingredients}>
          {newIngredients?.map(({ name, _id }) => (
            <IngredientPreviewImg src={ingredientIconDict[name]} alt={name} key={_id} />
          ))}
          {restIngredientsLength >= 6 && <p className="text text_type_main-default">+{restIngredientsLength}</p>}
        </div>
        <OrderPrice orderSum={orderPrice} />
      </div>
    </div>
  );
};

export default OrderCard;
