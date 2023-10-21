import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '../redux';
import { sendRequest } from '../../components/utils/responseUtils';
import { UserResponse } from '../../models/response';
import { User } from '../../models/user';

interface UserInitialState {
  user?: User;
}

const getUser = createAsyncThunk('reactBurger/user/getUser', async (token: string) => {
  return sendRequest<UserResponse>('auth/user/', {
    method: 'GET',
    headers: {
      // prettier-ignore
      "Authorization": token,
    },
  }).then((data) => data);
});

interface UpdateUserPayload {
  name: string;
  email: string;
  password: string;
}

const updateUser = createAsyncThunk('reactBurger/user/updateUser', async (payload: UpdateUserPayload) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return sendRequest<UserResponse>('auth/user/', {
      method: 'PATCH',
      headers: {
        // prettier-ignore
        "Authorization": token,
      },
      body: JSON.stringify(payload),
    }).then((data) => data);
  }
});

const updateUserWithRefresh = createAsyncThunk(
  'reactBurger/user/updateUserWithRefresh',
  async (arg: UpdateUserPayload, thunkAPI) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      await thunkAPI.dispatch(updateUser(arg)).unwrap();
      thunkAPI.dispatch(getUser(token));
    }
  },
);

const createInitialState = (): UserInitialState => ({
  user: undefined,
});

const userSlice = createSlice({
  name: 'reactBurger/userSlice',
  initialState: createInitialState(),
  reducers: {
    cleanupUser() {
      return createInitialState();
    },
  },
  extraReducers(builder) {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload?.user;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.user = undefined;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload?.user;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.user = undefined;
    });
  },
});

const { cleanupUser } = userSlice.actions;
export { getUser, updateUserWithRefresh, cleanupUser };
export default userSlice.reducer;
