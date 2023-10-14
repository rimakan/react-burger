import React, { SyntheticEvent } from 'react';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from '../../../../hooks';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';

interface RegisterFormInitialState {
  name: string;
  email: string;
  password: string;
}

const RegisterFormInitialState: RegisterFormInitialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm: React.FC = () => {
  const { formData, handleValueChange } = useForm(RegisterFormInitialState);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ password: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.info(formData.name, formData.email, formData.password);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input value={formData.name} placeholder="Имя" onChange={handleNameChange} />
      <EmailInput value={formData.email} placeholder="E-mail" onChange={handleEmailChange} />
      <PasswordInput value={formData.password} placeholder="Пароль" onChange={handlePasswordChange} />
      <Button htmlType="submit" extraClass="mb-6">
        Зарегистрироваться
      </Button>
      <footer>
        <FormFooterItem link="/login" label="Уже зарегистрированы?" linkLabel="Войти" />
      </footer>
    </FormWrapper>
  );
};

export default RegisterForm;
