import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';
import { useLoginForm } from './useLoginForm';
import { InputField } from '../../../uikit';

const LoginForm: React.FC = () => {
  const { handleSubmit, handleEmailChange, handlePasswordChange, formData, errors, isValid } = useLoginForm();
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="email"
        value={formData.email}
        placeholder="E-mail"
        onChange={handleEmailChange}
        error={formData.email.length > 0 && !!errors.email}
        errorText={errors.email}
      />
      <InputField type="password" value={formData.password} placeholder="Пароль" onChange={handlePasswordChange} />
      <Button htmlType="submit" extraClass="mb-6" disabled={!isValid}>
        Войти
      </Button>
      <footer>
        <FormFooterItem label="Вы — новый пользователь?" link="/register" linkLabel="Зарегистрироваться" />
        <FormFooterItem label="Забыли пароль?" link="/forgot-password" linkLabel="Восстановить пароль" />
      </footer>
    </FormWrapper>
  );
};

export default LoginForm;
