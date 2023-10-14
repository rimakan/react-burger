import React, { SyntheticEvent } from 'react';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from '../../../../hooks';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';

interface LoginFormInitialState {
  email: string;
  password: string;
}

const LoginFormInitialState: LoginFormInitialState = {
  email: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const { formData, handleValueChange } = useForm(LoginFormInitialState);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ password: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.info(formData.email, formData.password);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <EmailInput value={formData.email} placeholder="E-mail" onChange={handleEmailChange} />
      <PasswordInput value={formData.password} placeholder="Пароль" onChange={handlePasswordChange} />
      <Button htmlType="submit" extraClass="mb-6">
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
