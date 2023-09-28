import React, { useEffect, useMemo } from 'react';
import s from './BurgerConstructorLayout.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorFooter from '../BurgerConstructorFooter/BurgerConstructorFooter';
import { ProductType } from '../../../models/product';
import { useDispatch, useSelector } from '../../../hooks';
import {
  addIngredientToConstructor,
  getOrderPrice,
} from '../../../store/reactBurger/constructorSlice/constructorSlice';
import { getBurgerBun } from '../utils/getBurgerBun';
import defaultImg from '../../../icons/burger.svg';
import { useDrop } from 'react-dnd';

const BurgerConstructorLayout: React.FC = () => {
  const dispatch = useDispatch();

  const burgerIngredientsConstructorList = useSelector(
    ({ reactBurger }) => reactBurger.burgerConstructor.burgerConstructorIngredients,
  );
  const burgerBun = useSelector(({ reactBurger }) => reactBurger.burgerConstructor.burgerConstructorIngredients)[0];
  const orderPrice = useSelector(({ reactBurger }) => reactBurger.burgerConstructor.orderPrice);

  useEffect(() => {
    dispatch(getOrderPrice(burgerIngredientsConstructorList));
  }, [dispatch, burgerIngredientsConstructorList]);

  const filteredProducts = useMemo(() => {
    return burgerIngredientsConstructorList.filter(({ type }) => type !== ProductType.Bun);
  }, [burgerIngredientsConstructorList]);

  const [, drop] = useDrop(
    () => ({
      accept: 'ingredient',
      drop: (ingredient) => dispatch(addIngredientToConstructor(ingredient)),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [burgerIngredientsConstructorList],
  );

  return (
    <section className={`${s.burgerConstructorLayout}`}>
      <>
        {getBurgerBun(burgerBun, 'верх', 'top')}
        <div className={`${s.mainProductsList} custom-scroll`} ref={drop}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(({ _id, name, image_mobile, price }) => {
              return (
                <div className={s.mainProductsList__listItem} key={_id}>
                  <DragIcon type="primary" />
                  <ConstructorElement text={name} thumbnail={image_mobile} price={price} />
                </div>
              );
            })
          ) : (
            <>
              <ConstructorElement
                text="Добавьте составляющие из списка ингредиентов"
                thumbnail={defaultImg}
                price={0}
              />
            </>
          )}
        </div>
        {getBurgerBun(burgerBun, 'низ', 'bottom')}
        <BurgerConstructorFooter orderSum={orderPrice} />
      </>
    </section>
  );
};

export default BurgerConstructorLayout;
