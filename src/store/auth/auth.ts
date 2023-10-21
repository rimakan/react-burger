import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '../redux';
import { sendRequest } from '../../components/utils/responseUtils';
import { AuthResponse, LogoutResponse, TokenRefreshResponse } from '../../models/response';
import { User } from '../../models/user';

interface AuthSliceInitialState {
  user?: User;
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthPayload {
  name: string;
  email: string;
  password: string;
}

const authenticate = createAsyncThunk('reactBurger/auth/authenticate', async (payload: AuthPayload) => {
  return sendRequest<AuthResponse>('auth/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((data) => data);
});

interface LoginPayload extends Omit<AuthPayload, 'name'> {
  email: string;
  password: string;
}

const login = createAsyncThunk('reactBurger/auth/login', async (payload: LoginPayload) => {
  return sendRequest<AuthResponse>('auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((data) => data);
});

const refreshAccessToken = createAsyncThunk('reactBurger/auth/refreshAccessToken', async (token: string) => {
  const body = { token };
  return sendRequest<TokenRefreshResponse>('auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((data) => data);
});

const logout = createAsyncThunk('reactBurger/auth/logout', async (token: string) => {
  const body = { token };
  sendRequest<LogoutResponse>('auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((data) => data);
  localStorage.clear();
});

const forgotPassword = createAsyncThunk('reactBurger/auth/forgotPassword', async (email: string) => {
  const body = { email };
  return sendRequest<LogoutResponse>('password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((data) => data);
});

interface ResetPasswordPayload {
  password: string;
  token: string;
}

const resetPassword = createAsyncThunk(
  'reactBurger/auth/forgotPassword',
  async ({ password, token }: ResetPasswordPayload) => {
    const body = { password, token };
    return sendRequest<LogoutResponse>('password-reset/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((data) => data);
  },
);

const createInitialState = (): AuthSliceInitialState => ({
  user: undefined,
  accessToken: localStorage.getItem('accessToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
});

const authSlice = createSlice({
  name: 'reactBurger/authSlice',
  initialState: createInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.accessToken = '';
      state.refreshToken = '';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const accessToken = action.payload.accessToken;
      const refreshToken = action.payload.refreshToken;

      state.user = action.payload.user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    });
    builder.addCase(login.rejected, (state) => {
      state.user = undefined;
      state.accessToken = '';
      state.refreshToken = '';
    });
    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      const accessToken = action.payload.accessToken;
      const refreshToken = action.payload.refreshToken;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    });
    builder.addCase(refreshAccessToken.rejected, (state) => {
      state.accessToken = '';
      state.refreshToken = '';
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = undefined;
      state.accessToken = '';
      state.refreshToken = '';
    });
  },
});

export { authenticate, login, logout, refreshAccessToken, forgotPassword, resetPassword };
export default authSlice.reducer;
