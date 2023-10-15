import React from 'react';
import s from './ProfileNav.module.scss';
import NavigationLink from '../../../Common/NavigationLink/NavigationLink';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const className = 'text text_type_main-medium pt-4 pb-4';

const ProfileNav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <aside className={s.profileNav}>
      <div>
        <NavigationLink to="/profile" isActive={pathname === '/profile'} className={className}>
          Профиль
        </NavigationLink>
        <NavigationLink to="/profile/orders" isActive={pathname === '/profile/orders'} className={className}>
          История заказов
        </NavigationLink>
        <NavigationLink to="#" isActive={false} className={className}>
          Выход
        </NavigationLink>
        <Outlet />
      </div>
      <div className={s.hint}>
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете <br /> изменить свои персональные данные
        </p>
      </div>
    </aside>
  );
};

export default ProfileNav;
