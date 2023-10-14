import React, { SyntheticEvent } from 'react';
import FormWrapper from '../../../Common/FormWrapper/FormWrapper';
import { useForm } from '../../../../hooks';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';
import FormFooterItem from '../../../Common/FormFooterItem/FormFooterItem';

interface ResetPasswordInitialState {
  password: string;
  confirmationCode: string;
}

const ResetPasswordInitialState: ResetPasswordInitialState = {
  password: '',
  confirmationCode: '',
};

const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();

  const { formData, handleValueChange } = useForm(ResetPasswordInitialState);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ password: e.target.value });
  };

  const handleEmailCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ confirmationCode: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.info(formData.password, formData.confirmationCode);
    navigate('/login');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <PasswordInput value={formData.password} placeholder="Введите новый пароль" onChange={handlePasswordChange} />
      <Input value={formData.confirmationCode} placeholder="Введите код из письма" onChange={handleEmailCodeChange} />
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
