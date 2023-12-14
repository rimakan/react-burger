import ingredientsSlice, { cleanupIngredients, createInitialState } from './ingredientsSlice';
import { ingredients } from '../../../tests/testData';

describe('ingredientsSlice', () => {
  const ingredientsSliceInitialState = createInitialState();

  it('should handle initial state', () => {
    const action = { type: 'unknown' };

    expect(ingredientsSlice(ingredientsSliceInitialState, action)).toEqual(ingredientsSliceInitialState);
  });

  it('should cleanup the state', () => {
    const initialState = { ingredients };
    const action = cleanupIngredients();

    expect(ingredientsSlice(initialState, action)).toEqual(ingredientsSliceInitialState);
  });
});
