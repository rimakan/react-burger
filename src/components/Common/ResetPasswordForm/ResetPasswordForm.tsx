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
  const { value, handleEmailChange, handlePasswordChange, handleEmailCodeChange, submitForm, isSubmitDisabled } =
    useForm();
  const pathname = useFormPathname();

  return (
    <FormWrapper onSubmit={submitForm}>
      {pathname === 'forgot-password' && (
        <>
          <EmailInput value={value.email} placeholder="Укажите e-mail" onChange={handleEmailChange} />
        </>
      )}

      {pathname === 'reset-password' && (
        <>
          <PasswordInput value={value.password} placeholder="Введите новый пароль" onChange={handlePasswordChange} />
          <Input value={value.emailCode} placeholder="Введите код из письма" onChange={handleEmailCodeChange} />
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
