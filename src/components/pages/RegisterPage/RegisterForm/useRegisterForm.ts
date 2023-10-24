import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../../../store/auth/auth';
import { useDispatch, useForm } from '../../../../hooks';
import { SyntheticEvent, useCallback, useEffect } from 'react';
import { isEmailValid, required } from '../../../utils/validationUtils';

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

export const useRegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, errors, isValid, setErrors, handleValueChange } = useForm(RegisterFormInitialState);

  useEffect(() => {
    setErrors({
      name: required(formData.name) ? undefined : 'Поле обязательно к заполнению',
      email:
        (required(formData.email) ? undefined : 'Поле обязательно к заполнению') ||
        (isEmailValid(formData.email) ? undefined : 'Введите корректный email'),
      password: required(formData.password) ? undefined : 'Поле обязательно к заполнению',
    });
  }, [formData, setErrors]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ password: e.target.value });
  };

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      dispatch(authenticate(payload))
        .unwrap()
        .then(() => {
          navigate('/');
        });
    },
    [formData, dispatch, navigate],
  );

  return {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    formData,
    errors,
    isValid,
  };
};
