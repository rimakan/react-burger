import { useDispatch, useForm, useSelector } from '../../../../hooks';
import { SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import { isEmailValid, required } from '../../../utils/validationUtils';
import { updateUserWithRefresh } from '../../../../store/user/user';

interface ProfileFormInitialState {
  name: string;
  email: string;
  password: string;
}

const profileFormInitialState = ({ name, email, password }: ProfileFormInitialState): ProfileFormInitialState => ({
  name,
  email,
  password,
});

export const useProfileForm = () => {
  const user = useSelector((s) => s.user.user);
  const ref = useRef(null);

  const dispatch = useDispatch();
  const { formData, errors, isValid, setErrors, setFormData, handleValueChange } = useForm(
    profileFormInitialState({ name: user?.name || '', email: user?.email || '', password: '******' }),
  );

  const [areButtonsShown, setAreButtonsShown] = useState(false);

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
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      dispatch(updateUserWithRefresh(payload));
    },
    [formData, dispatch],
  );

  const handleCancel = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      setFormData({
        name: user?.name || '',
        email: user?.email || '',
        password: '******',
      });
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
    ref,
  };
};
