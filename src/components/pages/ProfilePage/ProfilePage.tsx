import React from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import { Outlet } from 'react-router-dom';
import s from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
  return (
    <section className={s.profile}>
      <ProfileNav />
      <Outlet />
    </section>
  );
};

export default ProfilePage;
