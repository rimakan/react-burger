import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import s from './BurgerConstructorItem.module.scss';
import { Product } from '../../../models/product';

interface BurgerConstructorItemProps {
  product: Product;
  onClick: () => void;
}

const BurgerConstructorItem: React.FC<BurgerConstructorItemProps> = ({ product, onClick }) => {
  return (
    <div className={s.burgerConstructorItem}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={product.name}
        thumbnail={product.image_mobile}
        price={product.price}
        handleClose={onClick}
      />
    </div>
  );
};

export default BurgerConstructorItem;
