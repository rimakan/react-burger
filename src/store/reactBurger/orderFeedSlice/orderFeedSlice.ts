import { ExtendedOrder } from '../../../models/backendEvents';
import { createSlice } from '@reduxjs/toolkit';
import { wsActions } from '../../middlewares/wsMiddleware.constants';

interface OrderFeedSliceInitialState {
  publicOrders?: ExtendedOrder[];
  todayOrdersCount: number;
  totalOrdersCount: number;
}

const createInitialState = (): OrderFeedSliceInitialState => ({
  publicOrders: [],
  todayOrdersCount: 0,
  totalOrdersCount: 0,
});

const orderFeedSlice = createSlice({
  name: 'reactBurger/orderFeedSlice',
  initialState: createInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(wsActions.getAllOrders, (state, action) => {
      state.publicOrders = action.payload?.orders;
      state.todayOrdersCount = action.payload.totalToday;
      state.totalOrdersCount = action.payload.total;
    });
  },
});

export default orderFeedSlice.reducer;
