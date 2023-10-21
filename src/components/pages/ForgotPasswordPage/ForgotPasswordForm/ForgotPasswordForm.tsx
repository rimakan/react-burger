import React from 'react';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';
import { useForgotPasswordForm } from './useForgotPasswordForm';
import { InputField } from '../../../uikit';

const ForgotPasswordForm: React.FC = () => {
  const { formData, handleEmailChange, handleSubmit, errors } = useForgotPasswordForm();
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="email"
        value={formData.email}
        placeholder="Укажите e-mail"
        errorText={errors.email}
        error={!!errors.email}
        onChange={handleEmailChange}
      />
      <Button htmlType="submit" extraClass="mb-6">
        Сохранить
      </Button>
      <footer>
        <FormFooterItem label="Вспомнили пароль?" link="/login" linkLabel="Войти" />
      </footer>
    </FormWrapper>
  );
};

export default ForgotPasswordForm;
