import React from 'react';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useFormPathname, useForm } from '../../../hooks';
import FormWrapper from '../FormWrapper/FormWrapper';
import FormFooterItem from '../FormFooterItem/FormFooterItem';

const LoginForm: React.FC = () => {
  const { value, handleNameChange, handleEmailChange, handlePasswordChange, submitForm, isSubmitDisabled } = useForm();
  const pathname = useFormPathname();

  return (
    <FormWrapper onSubmit={submitForm}>
      {pathname === 'register' && <Input value={value.name} placeholder="Имя" onChange={handleNameChange} />}
      <EmailInput value={value.email} placeholder="E-mail" onChange={handleEmailChange} />
      <PasswordInput value={value.password} placeholder="Пароль" onChange={handlePasswordChange} />
      <Button htmlType="submit" disabled={!isSubmitDisabled} extraClass="mb-6">
        {pathname === 'login' && 'Войти'}
        {pathname === 'register' && 'Зарегистрироваться'}
      </Button>
      <footer>
        {pathname === 'login' && (
          <>
            <FormFooterItem label="Вы — новый пользователь?" link="/register" linkLabel="Зарегистрироваться" />
            <FormFooterItem label="Забыли пароль?" link="/forgot-password" linkLabel="Восстановить пароль" />
          </>
        )}
        {pathname === 'register' && <FormFooterItem link="/login" label="Уже зарегистрированы?" linkLabel="Войти" />}
      </footer>
    </FormWrapper>
  );
};

export default LoginForm;
