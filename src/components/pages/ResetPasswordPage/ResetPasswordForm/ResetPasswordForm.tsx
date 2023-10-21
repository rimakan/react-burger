import React from 'react';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';
import { useResetPasswordForm } from './useResetPasswordForm';
import { InputField } from '../../../uikit';

const ResetPasswordForm: React.FC = () => {
  const { formData, errors, handlePasswordChange, handleConfirmationCodeChange, handleSubmit } = useResetPasswordForm();
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="password"
        value={formData.password}
        placeholder="Введите новый пароль"
        error={!!errors.password}
        errorText={errors.password}
        onChange={handlePasswordChange}
      />
      <InputField
        type="text"
        value={formData.token}
        placeholder="Введите код из письма"
        error={!!errors.token}
        errorText={errors.token}
        onChange={handleConfirmationCodeChange}
      />
      <Button htmlType="submit" extraClass="mb-6">
        Восстановить
      </Button>
      <footer>
        <FormFooterItem label="Вспомнили пароль?" link="/login" linkLabel="Войти" />
      </footer>
    </FormWrapper>
  );
};

export default ResetPasswordForm;
