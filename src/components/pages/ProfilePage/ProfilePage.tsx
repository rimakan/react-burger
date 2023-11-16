import React from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import { Outlet } from 'react-router-dom';
import s from './ProfilePage.module.scss';
import ExtendedOrderDialog from '../../Common/order/ExtendedOrderDialog/ExtendedOrderDialog';

const ProfilePage: React.FC = () => {
  return (
    <section className={s.profile}>
      <ProfileNav />
      <Outlet />
      <ExtendedOrderDialog />
    </section>
  );
};

export default ProfilePage;
