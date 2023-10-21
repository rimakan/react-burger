export const required = (value: string) => {
  if (value.length > 0) return true;
  return false;
};

export const isEmailValid = (value: string) => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
};
