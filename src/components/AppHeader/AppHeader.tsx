import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './AppHeader.module.scss';
import AppHeaderItem from '../Common/AppHeaderItem/AppHeaderItem';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <header className={s.appHeader}>
      <nav className="pt-7">
        <div className={s.menuItemsWrapper}>
          <AppHeaderItem title="Конструктор" icon={<BurgerIcon type="primary" />} isActive={true} />
          <AppHeaderItem title="Лента заказов" icon={<ListIcon type="secondary" />} />
        </div>
        <Link to="/">
          <span className={s.logo}>
            <Logo />
          </span>
        </Link>
        <div className={s.personalAccount}>
          <AppHeaderItem title="Личный кабинет" icon={<ProfileIcon type="secondary" />} />
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
