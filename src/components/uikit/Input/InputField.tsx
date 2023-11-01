import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FocusEvent, useRef, useState } from 'react';

interface InputFieldProps {
  type: 'text' | 'email' | 'password';
  value: string;
  placeholder: string;
  icon?: 'EditIcon' | undefined;
  error?: boolean;
  errorText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = (
  { type, value, placeholder, icon, errorText, error, onChange },
  props,
) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const iconClickHandler = () => {
    if (icon) {
      setTimeout(() => inputRef.current?.focus(), 0);
      setIsDisabled(false);
    }
    props.onIconClick?.();
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (icon) {
      setIsDisabled(true);
    }
    props.onBlur?.(e);
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
      onBlur={blurHandler}
    />
  );
};

export default InputField;
