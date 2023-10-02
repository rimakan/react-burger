import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import s from './BurgerConstructorFooter.module.scss';
import BurgerConstructorButton from '../BurgerConstructorButton/BurgerConstructorButton';

interface BurgerConstructorFooterProps {
  orderSum: number;
}

const BurgerConstructorFooter: React.FC<BurgerConstructorFooterProps> = ({ orderSum }) => {
  return (
    <div className={s.burgerConstructorFooter}>
      <div className="pl-7 pr-7">
        <p className="text text_type_main-medium">{orderSum}</p>
        <CurrencyIcon type="primary" />
      </div>
      <BurgerConstructorButton />
    </div>
  );
};

export default BurgerConstructorFooter;
