import React from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import ProfileForm from './ProfileForm/ProfileForm';
import s from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
  return (
    <section className={s.profile}>
      <ProfileNav />
      <ProfileForm />
    </section>
  );
};

export default ProfilePage;
