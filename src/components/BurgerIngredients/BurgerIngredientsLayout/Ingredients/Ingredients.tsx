import React, { useCallback, useContext, useState } from 'react';
import s from './Ingredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Product, ProductType } from '../../../../models/product';
import BurgerIngredientsList from '../BurgerIngredientsList/BurgerIngredientsList';
import { IngredientsContext } from '../../../pages/StellarBurgerMainPage';

const ingredientTabDict: { [key: string]: string } = {
  [ProductType.Bun]: 'Булки',
  [ProductType.Sauce]: 'Соусы',
  [ProductType.Main]: 'Начинки',
};

const Ingredients: React.FC = () => {
  const [active, setActive] = useState<string>(ProductType.Bun);

  const tabClickHandler = useCallback((value: string) => {
    setActive(value);
    const element = document.getElementById(ingredientTabDict[value]);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className={s.ingredients}>
      <div className={`${s.ingredients__tab} pt-10 pb-5`}>
        <Tab
          value={ProductType.Bun}
          active={active === ProductType.Bun}
          onClick={() => tabClickHandler(ProductType.Bun)}
        >
          {ingredientTabDict[ProductType.Bun]}
        </Tab>
        <Tab
          value={ProductType.Sauce}
          active={active === ProductType.Sauce}
          onClick={() => tabClickHandler(ProductType.Sauce)}
        >
          {ingredientTabDict[ProductType.Sauce]}
        </Tab>
        <Tab
          value={ProductType.Main}
          active={active === ProductType.Main}
          onClick={() => tabClickHandler(ProductType.Main)}
        >
          {ingredientTabDict[ProductType.Main]}
        </Tab>
      </div>

      <div className={`${s.ingredients__content} custom-scroll`}>
        <BurgerIngredientsList
          id={ingredientTabDict[ProductType.Bun]}
          header={ingredientTabDict[ProductType.Bun]}
          type={ProductType.Bun}
        />
        <BurgerIngredientsList
          id={ingredientTabDict[ProductType.Sauce]}
          header={ingredientTabDict[ProductType.Sauce]}
          type={ProductType.Sauce}
        />
        <BurgerIngredientsList
          id={ingredientTabDict[ProductType.Main]}
          header={ingredientTabDict[ProductType.Main]}
          type={ProductType.Main}
        />
      </div>
    </section>
  );
};

export default Ingredients;
