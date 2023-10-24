import React, { SyntheticEvent } from 'react';
import s from './FormWrapper.module.scss';
import { useFormPathname } from '../../../hooks';

interface FormWrapperProps extends React.PropsWithChildren {
  onSubmit: (e: SyntheticEvent) => void;
}

const formTypeDict: { [key: string]: string } = {
  login: 'Войти',
  register: 'Регистрация',
  'forgot-password': 'Восстановление пароля',
  'reset-password': 'Восстановление пароля',
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, onSubmit }) => {
  const pathname = useFormPathname();
  return (
    <form className={s.formWrapper} onSubmit={onSubmit}>
      <header>
        <h2 className="text text_type_main-medium">{formTypeDict[pathname]}</h2>
      </header>
      <div className={s.formWrapper__inputBox}>{children}</div>
    </form>
  );
};

export default FormWrapper;
