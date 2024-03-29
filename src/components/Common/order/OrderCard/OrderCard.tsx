import React from 'react';
import s from './OrderCard.module.scss';
import cn from 'classnames';
import OrderPrice from '../OrderPrice/OrderPrice';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientPreviewImg from '../../IngredientPreviewImg/IngredientPreviewImg';
import { ingredientIconDict } from '../../IngredientPreviewImg/IngredientPreviewImg.constants';
import { useOrderData } from '../../../../hooks';
import OrderTitle from '../OrderTitle/OrderTitle';
import OrderStatus from '../OrderStatus/OrderStatus';

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

  const { newIngredients, restIngredientsLength, price } = useOrderData(orderIngredients);

  return (
    <div className={classNames} onClick={onClick}>
      <header>
        <p className="text text_type_digits-default">#{orderNumber}</p>
        <FormattedDate date={date} className="text text_type_main-default text_color_inactive" />
      </header>
      <div className={s.orderCard__subHeader}>
        <OrderTitle>{orderTitle}</OrderTitle>
        {variant === 'primary' && orderStatus && <OrderStatus status={orderStatusDict[orderStatus]} />}
      </div>

      <div className={s.orderCard__details}>
        <div className={s.orderCard__ingredients}>
          {newIngredients?.map((ingredient, index) => (
            <IngredientPreviewImg
              src={ingredientIconDict[ingredient]}
              alt="ingredient"
              key={index}
              isLastItem={ingredient === newIngredients.at(-1) && restIngredientsLength > 0}
            />
          ))}
          {restIngredientsLength > 0 && <p className="text text_type_main-default">+{restIngredientsLength}</p>}
        </div>
        <OrderPrice orderSum={price} />
      </div>
    </div>
  );
};

export default OrderCard;
