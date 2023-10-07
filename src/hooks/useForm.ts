import { SyntheticEvent, useMemo, useState } from 'react';
import { useFormPathname } from './useFormPathname';
import { useNavigate } from 'react-router-dom';

interface InitialState {
  name: string;
  email: string;
  password: string;
  emailCode: string;
}

const initialState: InitialState = {
  name: '',
  email: '',
  password: '',
  emailCode: '',
};

export const useForm = () => {
  const [formData, setFormData] = useState<InitialState>(initialState);
  const pathname = useFormPathname();
  const navigate = useNavigate();

  const handleValueChange = (changes: Partial<InitialState>) => {
    setFormData((prevState) => ({
      ...prevState,
      ...changes,
    }));
  };

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();

    const { name, email, password } = formData;

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
      const { emailCode } = formData;
      console.info(password, emailCode);
    }

    setFormData(initialState);
  };

  const isSubmitDisabled = useMemo(() => {
    if (pathname === 'register') {
      return formData.name !== '' && formData.password !== '' && formData.email !== '';
    }

    if (pathname === 'login') {
      return formData.email !== '' && formData.password !== '';
    }

    if (pathname === 'forgot-password') {
      return formData.email !== '';
    }

    if (pathname === 'reset-password') {
      return formData.password !== '' && formData.emailCode !== '';
    }
  }, [pathname, formData]);

  return {
    formData,
    handleValueChange,
    submitForm,
    isSubmitDisabled,
  };
};
