import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import s from "./BurgerConstructorFooter.module.scss";

const BurgerConstructorFooter: React.FC = () => {
  return (
    <div className={s.burgerConstructorFooter}>
      <div className="pl-7 pr-7">
        <p className="text text_type_main-medium">610</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary" size="large" htmlType="button">
        Оформить заказ
      </Button>
    </div>
  );
};

export default BurgerConstructorFooter;
