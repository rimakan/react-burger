import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Product } from '../../../models/product';
import defaultImg from '../../../icons/burger.svg';

export const getBurgerBun = (bun: Product, position: string, type: 'top' | 'bottom') => {
  let burgerBun;
  if (bun) {
    burgerBun = (
      <ConstructorElement
        text={`${bun.name} (${position})`}
        thumbnail={bun.image_mobile}
        type={type}
        price={bun.price}
        isLocked={true}
        extraClass="m-4"
      />
    );
  } else {
    burgerBun = (
      <ConstructorElement
        text={`Добавьте булочку из списка ингредиентов (${position})`}
        thumbnail={defaultImg}
        type={type}
        price={0}
        isLocked={true}
        extraClass="m-4"
      />
    );
  }
  return burgerBun;
};
