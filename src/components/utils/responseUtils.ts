import { BASE_URL } from '../../constants/constants';

export const checkRequest = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const sendRequest = async <T>(slug: string, options: RequestInit | undefined = undefined): Promise<T> => {
  return await fetch(`${BASE_URL}/${slug}`, options).then(checkRequest);
};

export const fetchWithRefresh = async <T>(
  slug: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: any,
  options: RequestInit | undefined = undefined,
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${slug}`, options);
    return await checkRequest(response);
  } catch (err) {
    if (err instanceof Error && err.message === 'jwt expired') {
      const refreshData = await callback();
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      localStorage.setItem('accessToken', refreshData.accessToken);
      const response = await fetch(`${BASE_URL}/${slug}`, options);
      return await checkRequest(response);
    } else {
      return Promise.reject(err);
    }
  }
};
