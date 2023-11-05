import React from 'react';
import s from './OrderCard.module.scss';
import cn from 'classnames';
import OrderPrice from '../OrderPrice/OrderPrice';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientPreviewImg from '../../IngredientPreviewImg/IngredientPreviewImg';
import { ingredientIconDict } from '../../IngredientPreviewImg/IngredientPreviewImg.constants';
import { useOrderCardData } from '../../../../hooks/useOrderCardData';
import OrderTitle from '../OrderTitle/OrderTitle';
import OrderStatus from '../OrderStatus/OrderStatus';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

interface OrderCardProps {
  variant?: 'primary' | 'secondary';
  orderStatus?: string;
  orderNumber: number;
  date: Date;
  orderTitle: string;
  orderIngredients: string[];
  onClick: () => void;
}

const orderStatusDict: { [key: string]: string } = {
  created: 'Создан',
  pending: 'Готовится',
  done: 'Выполнен',
};

const OrderCard: React.FC<OrderCardProps> = ({
  variant = 'primary',
  orderStatus,
  orderNumber,
  date,
  orderTitle,
  orderIngredients,
  onClick,
}) => {
  const classNames = cn(s.orderCard, {
    [s.orderCard_primary]: variant === 'primary',
    [s.orderCard_secondary]: variant === 'secondary',
  });

  const { newIngredients, restIngredientsLength, price } = useOrderCardData(orderIngredients);

  const { pathname } = useLocation();

  return (
    <div className={classNames} onClick={onClick}>
      <header>
        <Link to={`${pathname}/${orderNumber}`} className="text text_type_digits-default text-link">
          #{orderNumber}
        </Link>
        <FormattedDate date={date} className="text text_type_main-default text_color_inactive" />
      </header>
      <div className={s.orderCard__subHeader}>
        <OrderTitle>{orderTitle}</OrderTitle>
        {variant === 'primary' && orderStatus && <OrderStatus status={orderStatusDict[orderStatus]} />}
      </div>

      <div className={s.orderCard__details}>
        <div className={s.orderCard__ingredients}>
          {newIngredients?.map((ingredient) => (
            <IngredientPreviewImg src={ingredientIconDict[ingredient]} alt="ingredient" key={uuid()} />
          ))}
          {orderIngredients.length >= 6 && <p className="text text_type_main-default">+{restIngredientsLength}</p>}
        </div>
        <OrderPrice orderSum={price} />
      </div>
    </div>
  );
};

export default OrderCard;
