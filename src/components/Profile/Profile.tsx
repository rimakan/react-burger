import React from 'react';
import s from './Profile.module.scss';
import ProfileForm from './ProfileForm/ProfileForm';
import ProfileNav from './ProfileNav/ProfileNav';

const Profile: React.FC = () => {
  return (
    <section className={s.profile}>
      <ProfileNav />
      <ProfileForm />
    </section>
  );
};

export default Profile;
