import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef, useState } from 'react';

interface InputFieldProps {
  type: 'text' | 'email' | 'password';
  value: string;
  placeholder: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  icon?: 'EditIcon' | undefined;
  error?: boolean;
  errorText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, value, placeholder, icon, errorText, error, onChange }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const iconClickHandler = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
    setIsDisabled(false);
  };

  const blurHandler = () => {
    setIsDisabled(true);
  };

  return (
    <Input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      icon={icon}
      onIconClick={iconClickHandler}
      ref={inputRef}
      errorText={errorText}
      error={error}
      disabled={icon && isDisabled}
      onBlur={icon && blurHandler}
    />
  );
};

export default InputField;
