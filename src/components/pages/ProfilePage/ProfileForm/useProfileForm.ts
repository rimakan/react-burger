import { useDispatch, useForm, useSelector } from '../../../../hooks';
import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { isEmailValid, required } from '../../../utils/validationUtils';
import { updateUser } from '../../../../store/user/user';
import { User } from '../../../../models/user';

interface ProfileFormInitialState {
  name: string;
  email: string;
  password: string;
}

export const useProfileForm = () => {
  const user: User | undefined = useSelector((s) => s.user.user);

  const dispatch = useDispatch();
  const { formData, errors, isValid, setErrors, setFormData, handleValueChange } = useForm<ProfileFormInitialState>({
    name: '',
    email: '',
    password: '',
  });

  const [areButtonsShown, setAreButtonsShown] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email, password: '' });
    }
  }, [setFormData, user]);

  useEffect(() => {
    setErrors({
      name: required(formData.name) ? undefined : 'Поле обязательно к заполнению',
      email:
        (required(formData.email) ? undefined : 'Поле обязательно к заполнению') ||
        (isEmailValid(formData.email) ? undefined : 'Введите корректный email'),
    });
  }, [formData, setErrors]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ name: e.target.value });
    setAreButtonsShown(true);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ email: e.target.value });
    setAreButtonsShown(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange({ password: e.target.value });
    setAreButtonsShown(true);
  };

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      const payload: { [key: string]: string } = {};

      for (const [key, value] of Object.entries(formData)) {
        if (user?.[key as keyof User] !== value) {
          payload[key] = value;
        }

        if (key === 'password' && value === '') {
          delete payload[key];
        }
      }
      dispatch(updateUser(payload));
    },
    [user, formData, dispatch],
  );

  const handleCancel = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      if (user) {
        setFormData({
          name: user.name,
          email: user.email,
          password: '',
        });
      }

      setAreButtonsShown(false);
    },
    [user, setFormData],
  );

  return {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleCancel,
    areButtonsShown,
    formData,
    errors,
    isValid,
  };
};
