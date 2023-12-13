import React, { useEffect, useMemo } from 'react';
import s from './BurgerConstructorLayout.module.scss';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorFooter from '../BurgerConstructorFooter/BurgerConstructorFooter';
import { Product, ProductType } from '../../../models/product';
import { useDispatch, useSelector } from '../../../hooks';
import {
  addIngredientToConstructor,
  getOrderPrice,
  removeIngredientFromConstructor,
} from '../../../store/reactBurger/constructorSlice/constructorSlice';
import { getBurgerBun } from '../utils/getBurgerBun';
import defaultImg from '../../../icons/burger.svg';
import { useDrop } from 'react-dnd';
import { v4 as uuid } from 'uuid';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';

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

  const handleClickIngredient = (id: string) => {
    dispatch(removeIngredientFromConstructor(id));
  };

  const [, drop] = useDrop(
    () => ({
      accept: 'ingredient',
      drop: (ingredient: Product) =>
        dispatch(
          addIngredientToConstructor({
            ...ingredient,
            dragId: `${ingredient._id}_${uuid()}`,
          }),
        ),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [burgerIngredientsConstructorList],
  );

  return (
    <section className={`${s.burgerConstructorLayout}`} data-testid="burgerConstructor">
      <>
        {getBurgerBun(burgerBun, 'верх', 'top')}
        <div className={`${s.mainProductsList} custom-scroll`} ref={drop} data-testid="constructorItem">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => {
              const { dragId } = product;
              return (
                <BurgerConstructorItem
                  key={dragId}
                  product={product}
                  onClick={() => handleClickIngredient(dragId)}
                  testId={`${product.type}_${index}`}
                />
              );
            })
          ) : (
            <>
              <ConstructorElement
                text="Добавьте составляющие из списка ингредиентов"
                thumbnail={defaultImg}
                price={0}
                isLocked={true}
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
