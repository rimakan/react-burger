import { BASE_URL } from '../../constants/constants';

export const checkRequest = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const sendRequest = async (slug: string, options: RequestInit | undefined = undefined) => {
  return fetch(`${BASE_URL}/${slug}`, options).then(checkRequest);
};
