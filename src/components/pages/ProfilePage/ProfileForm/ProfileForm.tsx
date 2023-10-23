import React from 'react';
import s from './ProfileForm.module.scss';
import { InputField, Spinner } from '../../../uikit';
import { useProfileForm } from './useProfileForm';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../../../hooks';

const ProfileForm: React.FC = () => {
  const isLoading = useSelector((s) => s.user.user);

  const {
    formData,
    errors,
    isValid,
    areButtonsShown,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleCancel,
  } = useProfileForm();

  return !isLoading ? (
    <Spinner />
  ) : (
    <div className={s.profileForm}>
      <InputField
        type="text"
        value={formData.name}
        placeholder="Имя"
        onChange={handleNameChange}
        icon="EditIcon"
        errorText={errors.name}
        error={!!errors.name}
      />
      <InputField
        type="email"
        value={formData.email}
        placeholder="E-mail"
        onChange={handleEmailChange}
        icon="EditIcon"
        errorText={errors.email}
        error={!!errors.email}
      />
      <InputField
        type="password"
        value={formData.password}
        placeholder="Пароль"
        onChange={handlePasswordChange}
        icon="EditIcon"
        errorText={errors.password}
        error={!!errors.password}
      />
      {areButtonsShown && (
        <div className={s.profileForm__buttonGroup}>
          <Button htmlType="submit" disabled={!isValid} onClick={handleSubmit}>
            Сохранить
          </Button>
          <Button htmlType="button" type="secondary" onClick={handleCancel}>
            Отменить
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
