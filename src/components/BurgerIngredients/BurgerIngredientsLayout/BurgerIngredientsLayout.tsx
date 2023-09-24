import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredients from "./IngredientsTab/Ingredients";
import s from "./BurgerIngredients.module.scss";

const BurgerIngredientsLayout: React.FC = () => {
  return (
    <section className={`${s.burgerIngredientsLayout} pt-4 pb-4`}>
      <header className="pt-10 pb-5">
        <h1 className="text text_type_main-large">Соберите бургер</h1>
      </header>
      <Ingredients />
    </section>
  );
};

export default BurgerIngredientsLayout;
