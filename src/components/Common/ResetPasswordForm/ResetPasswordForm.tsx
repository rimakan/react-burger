import React from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';
import { useForm, useFormPathname } from '../../../hooks';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import FormFooterItem from '../FormFooterItem/FormFooterItem';

const pathLabelDict: { [key: string]: string } = {
  'reset-password': 'Восстановить',
  'forgot-password': 'Сохранить',
};

const ResetPasswordForm: React.FC = () => {
  const { formData, handleValueChange, submitForm, isSubmitDisabled } = useForm();
  const pathname = useFormPathname();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ password: e.target.value });
  };

  const handleEmailCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ emailCode: e.target.value });
  };

  return (
    <FormWrapper onSubmit={submitForm}>
      {pathname === 'forgot-password' && (
        <>
          <EmailInput value={formData.email} placeholder="Укажите e-mail" onChange={handleEmailChange} />
        </>
      )}

      {pathname === 'reset-password' && (
        <>
          <PasswordInput value={formData.password} placeholder="Введите новый пароль" onChange={handlePasswordChange} />
          <Input value={formData.emailCode} placeholder="Введите код из письма" onChange={handleEmailCodeChange} />
        </>
      )}

      <Button htmlType="submit" disabled={!isSubmitDisabled} extraClass="mb-6">
        {pathLabelDict[pathname]}
      </Button>
      <footer>
        <FormFooterItem label="Вспомнили пароль?" link="/login" linkLabel="Войти" />
      </footer>
    </FormWrapper>
  );
};

export default ResetPasswordForm;
