import React from 'react';
import s from './IngredientCard.module.scss';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { Product } from '../../../models/product';

interface IngredientCardProps {
  count: number;
  itemImage: string;
  itemTitle: string;
  itemPrice: number;
  ingredient: Product;
  onClick: () => void;
  testId: string;
}

const IngredientCard: React.FC<IngredientCardProps> = ({
  count,
  itemImage,
  itemPrice,
  itemTitle,
  ingredient,
  onClick,
  testId,
}) => {
  const [, drag] = useDrag(
    () => ({
      type: 'ingredient',
      item: { ...ingredient },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );

  const className = 'text text_type_main-default';
  return (
    <div className={`${s.ingredientCard} pb-8`} onClick={onClick} ref={drag} data-testid={testId}>
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
