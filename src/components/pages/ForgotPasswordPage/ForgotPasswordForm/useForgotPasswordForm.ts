import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../../../store/auth/auth';
import { useDispatch, useForm } from '../../../../hooks';
import { SyntheticEvent, useCallback, useEffect } from 'react';
import { isEmailValid, required } from '../../../utils/validationUtils';

interface ForgotPasswordFormInitialState {
  email: string;
}

const forgotPasswordFormInitialState: ForgotPasswordFormInitialState = {
  email: '',
};

export const useForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, setErrors, errors, handleValueChange } = useForm(forgotPasswordFormInitialState);

  useEffect(() => {
    setErrors({
      email:
        (required(formData.email) ? undefined : 'Поле обязательно к заполнению') ||
        (isEmailValid(formData.email) ? undefined : 'Введите корректный email'),
    });
  }, [formData, setErrors]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ email: e.target.value });
  };

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch(forgotPassword(formData.email))
        .unwrap()
        .then(() => {
          navigate('/reset-password');
        });
    },
    [formData, dispatch, navigate],
  );

  return {
    handleEmailChange,
    handleSubmit,
    formData,
    errors,
  };
};
