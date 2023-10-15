import React from 'react';
import s from './ProfileForm.module.scss';
import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

const ProfileForm: React.FC = () => {
  return (
    <div className={s.profileForm}>
      <Input value={''} placeholder="Имя" onChange={(e) => e.target.value} icon="EditIcon" />
      <EmailInput value={''} placeholder="E-mail" onChange={(e) => e.target.value} isIcon={true} />
      <PasswordInput value="******" placeholder="Пароль" onChange={(e) => e.target.value} icon="EditIcon" />
    </div>
  );
};

export default ProfileForm;
