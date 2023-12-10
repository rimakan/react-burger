import { OrderState } from '../../../models/order';
import { ExtendedOrder } from '../../../models/order';
import orderFeedActionsSlice, { closeOrderDialog, openOrderDialog } from './orderFeedActionsSlice';

describe('orderFeedActionsSlice', () => {
  const orderFeedActionsSliceInitialState = {
    order: undefined,
  };

  const order: ExtendedOrder = {
    _id: '1',
    name: 'Some order',
    number: Math.trunc(Math.random() * 10000),
    status: OrderState.Done,
    ingredients: ['bun', 'cutlet', 'salad', 'bun'],
    createdAt: new Date().getDate().toLocaleString(),
    updatedAt: new Date().getDate().toLocaleString(),
  };

  it('should handle the initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = orderFeedActionsSliceInitialState;

    expect(orderFeedActionsSlice(orderFeedActionsSliceInitialState, action)).toEqual(expectedState);
  });

  it('should save the order to the state', () => {
    const expectedState = { order };
    const action = openOrderDialog(order);

    expect(orderFeedActionsSlice(orderFeedActionsSliceInitialState, action)).toEqual(expectedState);
  });

  it('should cleanup the state', () => {
    const initialState = { order };
    const action = closeOrderDialog();

    expect(orderFeedActionsSlice(initialState, action)).toEqual(orderFeedActionsSliceInitialState);
  });
});
