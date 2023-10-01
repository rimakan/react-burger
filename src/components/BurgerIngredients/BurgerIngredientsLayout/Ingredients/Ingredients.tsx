import React, { useCallback, useRef, useState } from 'react';
import s from './Ingredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProductType } from '../../../../models/product';
import BurgerIngredientsList from '../BurgerIngredientsList/BurgerIngredientsList';

const ingredientTabDict: { [key: string]: string } = {
  [ProductType.Bun]: 'Булки',
  [ProductType.Sauce]: 'Соусы',
  [ProductType.Main]: 'Начинки',
};

const Ingredients: React.FC = () => {
  const [active, setActive] = useState<string>(ProductType.Bun);

  const ref = useRef<(HTMLDivElement | null)[]>([]);

  const tabClickHandler = useCallback((value: string, index: number) => {
    setActive(value);
    if (ref?.current) {
      ref.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollHandler = useCallback(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.target.id !== active) {
        setActive(entry.target.id);
      }
    });

    if (ref.current) {
      ref.current.forEach((el) => {
        if (el) {
          observer.observe(el);
        }
      });
    }
  }, [active]);

  return (
    <section className={s.ingredients}>
      <div className={`${s.ingredients__tab} pt-10 pb-5`}>
        <Tab
          value={ProductType.Bun}
          active={active === ProductType.Bun}
          onClick={() => tabClickHandler(ProductType.Bun, 0)}
        >
          {ingredientTabDict[ProductType.Bun]}
        </Tab>
        <Tab
          value={ProductType.Sauce}
          active={active === ProductType.Sauce}
          onClick={() => tabClickHandler(ProductType.Sauce, 1)}
        >
          {ingredientTabDict[ProductType.Sauce]}
        </Tab>
        <Tab
          value={ProductType.Main}
          active={active === ProductType.Main}
          onClick={() => tabClickHandler(ProductType.Main, 2)}
        >
          {ingredientTabDict[ProductType.Main]}
        </Tab>
      </div>

      <div className={`${s.ingredients__content} custom-scroll`} onScroll={scrollHandler}>
        <BurgerIngredientsList
          id={ProductType.Bun}
          header={ingredientTabDict[ProductType.Bun]}
          type={ProductType.Bun}
          ref={(el) => (ref.current[0] = el)}
        />
        <BurgerIngredientsList
          id={ProductType.Sauce}
          header={ingredientTabDict[ProductType.Sauce]}
          type={ProductType.Sauce}
          ref={(el) => (ref.current[1] = el)}
        />
        <BurgerIngredientsList
          id={ProductType.Main}
          header={ingredientTabDict[ProductType.Main]}
          type={ProductType.Main}
          ref={(el) => (ref.current[2] = el)}
        />
      </div>
    </section>
  );
};

export default Ingredients;
