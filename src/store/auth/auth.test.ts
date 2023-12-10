import auth from './auth';

describe('authSlice', () => {
  const initialState = {
    accessToken: '',
    refreshToken: '',
  };

  it('should handle the initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = initialState;

    expect(auth(initialState, action)).toEqual(expectedState);
  });
});
