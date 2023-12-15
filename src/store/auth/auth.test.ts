import auth, { createInitialState } from './auth';

describe('authSlice', () => {
  const authSliceInitialState = createInitialState();

  it('should handle the initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = authSliceInitialState;

    expect(auth(authSliceInitialState, action)).toEqual(expectedState);
  });
});
