import orderFeedSlice from './orderFeedSlice';

describe('orderFeedActionsSlice', () => {
  const orderFeedSliceInitialState = {
    publicOrders: [],
    todayOrdersCount: 0,
    totalOrdersCount: 0,
  };

  it('should handle the initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = orderFeedSliceInitialState;

    expect(orderFeedSlice(orderFeedSliceInitialState, action)).toEqual(expectedState);
  });
});
