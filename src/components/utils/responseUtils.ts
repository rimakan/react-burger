import { BASE_URL } from '../../constants/constants';
import { TokenRefreshResponse } from '../../models/response';

export const checkRequest = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

export const sendRequest = async <T>(slug: string, options: RequestInit | undefined = undefined): Promise<T> => {
  return await fetch(`${BASE_URL}/${slug}`, options).then(checkRequest);
};

export const fetchWithRefresh = async <T>(slug: string, options: RequestInit | undefined = undefined): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${slug}`, options);
    return await checkRequest(response);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.message === 'jwt expired' || err.message === 'Token is invalid') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const token = localStorage.getItem('refreshToken')!;
      const refreshData = await sendRequest<TokenRefreshResponse>('auth/token', {
        method: 'POST',
        headers: {
          // prettier-ignore
          "Content-Type": "application-json",
          "Authorization": token,
          // prettier-ignore
        },
      });
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      localStorage.setItem('accessToken', refreshData.accessToken);
      const response = await fetch(`${BASE_URL}/${slug}`, options);
      return await checkRequest(response);
    } else {
      return Promise.reject(err);
    }
  }
};
