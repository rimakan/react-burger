import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '../redux';
import { fetchWithRefresh } from '../../components/utils/responseUtils';
import { UserResponse } from '../../models/response';
import { User } from '../../models/user';
import { ExtendedOrder } from '../../models/order';
import { wsActions } from '../middlewares/wsMiddleware.constants';

interface UserInitialState {
  isLoading: boolean;
  user?: User;
  relatedData: {
    personalOrders?: ExtendedOrder[];
  };
}

const getUser = createAsyncThunk('reactBurger/user/getUser', async (_, thunkAPI) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    thunkAPI.dispatch(setIsLoading(true));
    const response = await fetchWithRefresh<UserResponse>('auth/user', {
      method: 'GET',
      headers: {
        // prettier-ignore
        "Content-Type": "application-json",
        "Authorization": token,
        // prettier-ignore
      },
    });

    thunkAPI.dispatch(setIsLoading(false));
    return response.user;
  }
});

const updateUser = createAsyncThunk('reactBurger/user/updateUser', async (payload: Partial<User>) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    const response = await fetchWithRefresh<UserResponse>('auth/user', {
      method: 'PATCH',
      headers: {
        // prettier-ignore
        "Authorization": token,
      },
      body: JSON.stringify(payload),
    });

    return response.user;
  }
});

const createInitialState = (): UserInitialState => ({
  user: undefined,
  isLoading: false,
  relatedData: {
    personalOrders: [],
  },
});

const userSlice = createSlice({
  name: 'reactBurger/userSlice',
  initialState: createInitialState(),
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    cleanupUser() {
      return createInitialState();
    },
  },
  extraReducers(builder) {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.user = undefined;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.user = undefined;
    });
    builder.addCase(wsActions.getPersonalOrders, (state, action) => {
      state.relatedData.personalOrders = action.payload?.orders;
    });
  },
});

const { cleanupUser, setIsLoading } = userSlice.actions;
export { getUser, updateUser, cleanupUser, setIsLoading };
export default userSlice.reducer;
