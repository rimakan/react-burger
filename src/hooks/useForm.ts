import { SyntheticEvent, useMemo, useState } from 'react';
import { useFormPathname } from './useFormPathname';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  emailCode: '',
};

export const useForm = () => {
  const [value, setValue] = useState(initialState);
  const pathname = useFormPathname();
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleEmailCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => ({
      ...prevState,
      emailCode: e.target.value,
    }));
  };

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();

    const { name, email, password } = value;

    if (pathname === 'register') {
      console.info(name, email, password);
    }

    if (pathname === 'login') {
      console.info(email, password);
    }

    if (pathname === 'forgot-password') {
      console.info(email);
      navigate('/reset-password');
    }

    if (pathname === 'reset-password') {
      const { emailCode } = value;
      console.info(password, emailCode);
    }

    setValue(initialState);
  };

  const isSubmitDisabled = useMemo(() => {
    if (pathname === 'register') {
      return value.name !== '' || value.password !== '' || value.email !== '';
    }

    if (pathname === 'login') {
      return value.email !== '' || value.password !== '';
    }

    if (pathname === 'forgot-password') {
      return value.email !== '';
    }

    if (pathname === 'reset-password') {
      return value.password !== '' || value.emailCode !== '';
    }
  }, [pathname, value]);

  return {
    value,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleEmailCodeChange,
    submitForm,
    isSubmitDisabled,
  };
};
