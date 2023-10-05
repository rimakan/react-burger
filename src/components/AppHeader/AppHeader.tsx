import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './AppHeader.module.scss';
import AppHeaderItem from '../Common/AppHeaderItem/AppHeaderItem';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <header className={s.appHeader}>
      <nav className="pt-4 pb-4">
        <div className={s.appHeader__menuItemsWrapper}>
          <AppHeaderItem title="Конструктор" icon={<BurgerIcon type="primary" />} isActive={true} />
          <AppHeaderItem title="Лента заказов" icon={<ListIcon type="secondary" />} />
        </div>
        <Link to="/">
          <Logo />
        </Link>
        <AppHeaderItem title="Личный кабинет" icon={<ProfileIcon type="secondary" />} />
      </nav>
    </header>
  );
};

export default AppHeader;
