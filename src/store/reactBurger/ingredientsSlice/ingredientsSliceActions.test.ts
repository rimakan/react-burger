import ingredientsSliceActions, {
  closeIngredientDialog,
  openIngredientDialog,
  createInitialState,
} from './ingredientsSliceActions';
import { ingredients } from '../../../tests/testData';

describe('ingredientsSlice', () => {
  const ingredientsActionsSliceInitialState = createInitialState();

  const ingredientId = ingredients[0]._id;

  it('should handle initial state', () => {
    const action = { type: 'unknown' };

    expect(ingredientsSliceActions(ingredientsActionsSliceInitialState, action)).toEqual(
      ingredientsActionsSliceInitialState,
    );
  });

  it('should save the ingredient id to the state', () => {
    const action = openIngredientDialog(ingredientId);
    const expectedState = { ingredientId };

    expect(ingredientsSliceActions(ingredientsActionsSliceInitialState, action)).toEqual(expectedState);
  });

  it('should cleanup the state', () => {
    const initialState = { ingredientId };
    const action = closeIngredientDialog();

    expect(ingredientsSliceActions(initialState, action)).toEqual(ingredientsActionsSliceInitialState);
  });
});
