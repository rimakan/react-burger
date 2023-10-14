import { useState } from 'react';

export const useForm = <FormData>(initialFormData: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleValueChange = (changes: Partial<FormData>) => {
    setFormData((prevState) => ({
      ...prevState,
      ...changes,
    }));
  };

  return {
    formData,
    handleValueChange,
  };
};
