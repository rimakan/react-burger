import React, { useContext, useMemo } from 'react';
import s from './BurgerConstructorLayout.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorFooter from '../BurgerConstructorFooter/BurgerConstructorFooter';
import { ProductType } from '../../../models/product';
import { IngredientsContext } from '../../pages/StellarBurgerMainPage';

const BurgerConstructorLayout: React.FC = () => {
  const [ingredients] = useContext(IngredientsContext);

  const bun = ingredients[0];

  const filteredProducts = useMemo(() => {
    return ingredients.filter(({ type }) => type !== ProductType.Bun);
  }, [ingredients]);

  const orderSum = useMemo(() => {
    return ingredients.reduce((prev, acc) => prev + acc.price, 0);
  }, [ingredients]);

  return (
    <section className={`${s.burgerConstructorLayout}`}>
      {bun && ingredients && (
        <>
          <ConstructorElement
            text={`${bun.name} (верх)`}
            thumbnail={bun.image_mobile}
            type="top"
            price={bun.price}
            isLocked={true}
            extraClass="m-4"
          />
          <div className={`${s.mainProductsList} custom-scroll`}>
            {filteredProducts.map(({ _id, name, image_mobile, price }) => {
              return (
                <div className={s.mainProductsList__listItem} key={_id}>
                  <DragIcon type="primary" />
                  <ConstructorElement text={name} thumbnail={image_mobile} price={price} />
                </div>
              );
            })}
          </div>
          <ConstructorElement
            text={`${bun.name} (низ)`}
            thumbnail={bun.image_mobile}
            type="bottom"
            price={bun.price}
            isLocked={true}
            extraClass="m-4"
          />
          <BurgerConstructorFooter orderSum={orderSum} />
        </>
      )}
    </section>
  );
};

export default BurgerConstructorLayout;
