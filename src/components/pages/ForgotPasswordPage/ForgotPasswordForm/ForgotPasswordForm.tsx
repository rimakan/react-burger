import React, { SyntheticEvent } from 'react';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import { useForm } from '../../../../hooks';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';
import { useNavigate } from 'react-router-dom';

interface ForgotPasswordInitialState {
  email: string;
}

const ForgotPasswordInitialState: ForgotPasswordInitialState = {
  email: '',
};

const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const { formData, handleValueChange } = useForm(ForgotPasswordInitialState);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ email: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.info(formData.email);
    navigate('/reset-password');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <EmailInput value={formData.email} placeholder="Укажите e-mail" onChange={handleEmailChange} />
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
