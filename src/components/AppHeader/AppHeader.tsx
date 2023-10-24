import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './AppHeader.module.scss';
import AppHeaderItem from '../Common/AppHeaderItem/AppHeaderItem';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavigationLink from '../Common/NavigationLink/NavigationLink';

const AppHeader: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className={s.appHeader}>
      <nav className="pt-7">
        <div className={s.menuItemsWrapper}>
          <NavigationLink to="/" isActive={pathname === '/'}>
            <AppHeaderItem title="Конструктор" icon={<BurgerIcon type="primary" />} />
          </NavigationLink>

          <AppHeaderItem title="Лента заказов" icon={<ListIcon type="secondary" />} />
        </div>
        <Link to="/" className={s.logo}>
          <Logo />
        </Link>
        <div className={s.personalAccount}>
          <NavigationLink to="/profile" isActive={pathname === '/profile'}>
            <AppHeaderItem title="Личный кабинет" icon={<ProfileIcon type="secondary" />} />
          </NavigationLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
