import React from 'react';
import s from './IngredientCard.module.scss';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface IngredientCardProps {
  count: number;
  itemImage: string;
  itemTitle: string;
  itemPrice: number;
  onClick: () => void;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ count, itemImage, itemPrice, itemTitle, onClick }) => {
  const className = 'text text_type_main-default';
  return (
    <div className={`${s.ingredientCard} pb-8`} onClick={onClick}>
      {count > 0 && <Counter count={count} size="default" />}
      <img src={itemImage} alt={itemTitle} />
      <div>
        <p className={className}>{itemPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={className}>{itemTitle}</p>
    </div>
  );
};

export default IngredientCard;
