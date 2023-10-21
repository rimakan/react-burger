import { useNavigate } from 'react-router-dom';
import { login } from '../../../../store/auth/auth';
import { useDispatch, useForm } from '../../../../hooks';
import { SyntheticEvent, useCallback, useEffect } from 'react';
import { isEmailValid } from '../../../utils/validationUtils';

interface LoginFormInitialState {
  email: string;
  password: string;
}

const LoginFormInitialState: LoginFormInitialState = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, handleValueChange, isValid, errors, setErrors } = useForm(LoginFormInitialState);

  useEffect(() => {
    setErrors({
      email: isEmailValid(formData.email) ? undefined : 'Введите корректный email',
    });
  }, [formData, setErrors]);

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
        email: formData.email,
        password: formData.password,
      };

      dispatch(login(payload))
        .unwrap()
        .then(() => {
          navigate('/');
        });
    },
    [formData, dispatch, navigate],
  );

  return {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    formData,
    isValid,
    errors,
  };
};
