import { useNavigate } from 'react-router-dom';
import { useDispatch, useForm } from '../../../../hooks';
import { SyntheticEvent, useCallback, useEffect } from 'react';
import { resetPassword } from '../../../../store/auth/auth';
import { required } from '../../../utils/validationUtils';

interface ResetPasswordFormInitialState {
  token: string;
  password: string;
}

const ResetPasswordFormInitialState: ResetPasswordFormInitialState = {
  token: '',
  password: '',
};

export const useResetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, handleValueChange, errors, setErrors } = useForm(ResetPasswordFormInitialState);

  useEffect(() => {
    setErrors({
      token: required(formData.token) ? undefined : 'Поле обязательно к заполнению',
      password: required(formData.password) ? undefined : 'Поле обязательно к заполнению',
    });
  }, [formData, setErrors]);

  const handleConfirmationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ token: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ password: e.target.value });
  };

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      const payload = {
        token: formData.token,
        password: formData.password,
      };

      dispatch(resetPassword(payload))
        .unwrap()
        .then(() => navigate('/login'));
    },
    [formData, dispatch, navigate],
  );

  return {
    handleConfirmationCodeChange,
    handlePasswordChange,
    handleSubmit,
    formData,
    errors,
  };
};
