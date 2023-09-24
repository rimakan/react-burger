import React from "react";
import s from "./StellarBurgerMainPage.module.scss";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const StellarBurgerMainPage = () => {
  return (
    <div className={s.stelarBurgerMainPage}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
};

export default StellarBurgerMainPage;
