import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';
import { useRegisterForm } from './useRegisterForm';
import { InputField } from '../../../uikit';

const RegisterForm: React.FC = () => {
  const { handleSubmit, handleNameChange, handleEmailChange, handlePasswordChange, formData, errors, isValid } =
    useRegisterForm();
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={formData.name}
        placeholder="Имя"
        onChange={handleNameChange}
        error={!!errors.name}
        errorText={errors.name}
      />
      <InputField
        type="email"
        value={formData.email}
        placeholder="E-mail"
        onChange={handleEmailChange}
        error={!!errors.email}
        errorText={errors.email}
      />
      <InputField
        type="password"
        value={formData.password}
        placeholder="Пароль"
        onChange={handlePasswordChange}
        error={!!errors.password}
        errorText={errors.password}
      />
      <Button htmlType="submit" extraClass="mb-6" disabled={!isValid}>
        Зарегистрироваться
      </Button>
      <footer>
        <FormFooterItem link="/login" label="Уже зарегистрированы?" linkLabel="Войти" />
      </footer>
    </FormWrapper>
  );
};

export default RegisterForm;
