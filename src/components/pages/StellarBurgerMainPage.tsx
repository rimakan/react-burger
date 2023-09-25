import React from "react";
import s from "./StellarBurgerMainPage.module.scss";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const StellarBurgerMainPage = () => {
  return (
    <main>
      <div className={s.stelarBurgerMainPage}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  );
};

export default StellarBurgerMainPage;
