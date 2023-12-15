import user, { cleanupUser, setIsLoading, createInitialState } from './user';

describe('userSlice', () => {
  const userSliceInitialState = createInitialState();

  const testUser = {
    name: 'John Doe',
    email: 'john@doe.com',
    password: '123456',
  };

  it('should handle the initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = userSliceInitialState;

    expect(user(userSliceInitialState, action)).toEqual(expectedState);
  });

  it('should start the loading', () => {
    const expectedState = { ...userSliceInitialState, isLoading: true };
    const action = setIsLoading(true);

    expect(user(userSliceInitialState, action)).toEqual(expectedState);
  });

  it('should cleanup the state', () => {
    const initialState = { ...userSliceInitialState, user: testUser };
    const action = cleanupUser();

    expect(user(initialState, action)).toEqual(userSliceInitialState);
  });
});
