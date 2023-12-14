import { createSlice } from '@reduxjs/toolkit';
import { ExtendedOrder } from '../../../models/order';
import { wsActions } from '../../middlewares/wsMiddleware.constants';

interface OrderFeedActionsSliceInitialState {
  order?: ExtendedOrder;
}

export const createInitialState = (): OrderFeedActionsSliceInitialState => ({
  order: undefined,
});

const orderFeedActionsSlice = createSlice({
  name: 'reactBurger/orderFeedActionsSlice',
  initialState: createInitialState(),
  reducers: {
    openOrderDialog(state, action) {
      state.order = action.payload;
    },
    closeOrderDialog() {
      return createInitialState();
    },
  },
  extraReducers(builder) {
    builder.addCase(wsActions.getAllOrders, (state, action) => {
      state.order = action.payload.orders.find((order) => order._id === state.order?._id);
    });
  },
});

const { openOrderDialog, closeOrderDialog } = orderFeedActionsSlice.actions;
export { openOrderDialog, closeOrderDialog };
export default orderFeedActionsSlice.reducer;
