import orderFeedSlice, { createInitialState } from './orderFeedSlice';

describe('orderFeedActionsSlice', () => {
  const orderFeedSliceInitialState = createInitialState();

  it('should handle the initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = orderFeedSliceInitialState;

    expect(orderFeedSlice(orderFeedSliceInitialState, action)).toEqual(expectedState);
  });
});
