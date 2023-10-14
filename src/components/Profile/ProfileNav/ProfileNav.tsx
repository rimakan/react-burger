import React from 'react';
import s from './ProfileNav.module.scss';

const className = 'text text_type_main-medium pt-4 pb-4';

const ProfileNav: React.FC = () => {
  return (
    <aside className={s.profileNav}>
      <div>
        <p className={className}>Профиль</p>
        <p className={className}>История заказа</p>
        <p className={className}>Выход</p>
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
