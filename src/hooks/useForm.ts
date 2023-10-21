import { useMemo, useState } from 'react';

export const useForm = <FormData, ErrorsData extends object = Partial<Record<keyof FormData, string | undefined>>>(
  initialFormData: FormData,
  initialErrorsData = {} as ErrorsData,
) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ErrorsData>(initialErrorsData);

  const handleValueChange = (changes: Partial<FormData>) => {
    setFormData((prevState) => ({
      ...prevState,
      ...changes,
    }));
  };

  const isValid = useMemo<boolean>(() => {
    return !Object.values(errors).some((value) => !!value);
  }, [errors]);

  return {
    formData,
    errors,
    isValid,
    setErrors,
    setFormData,
    handleValueChange,
  };
};
