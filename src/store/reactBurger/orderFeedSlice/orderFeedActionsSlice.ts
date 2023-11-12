import { createSlice } from '@reduxjs/toolkit';
import { ExtendedOrder } from '../../../models/order';

interface OrderFeedActionsSliceInitialState {
  order?: ExtendedOrder;
}

const createInitialState = (): OrderFeedActionsSliceInitialState => ({
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
});

const { openOrderDialog, closeOrderDialog } = orderFeedActionsSlice.actions;
export { openOrderDialog, closeOrderDialog };
export default orderFeedActionsSlice.reducer;
