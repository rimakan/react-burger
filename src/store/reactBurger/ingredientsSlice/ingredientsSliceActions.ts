import { createSlice } from '@reduxjs/toolkit';

interface ingredientsActionsSliceState {
  ingredientId: string | null;
}

const createInitialState = (): ingredientsActionsSliceState => ({
  ingredientId: null,
});

const ingredientsActionsSlice = createSlice({
  name: 'reactBurger/ingredientsActionsSlice',
  initialState: createInitialState(),
  reducers: {
    openIngredientDialog(state, action) {
      state.ingredientId = action.payload;
    },
    closeIngredientDialog(state) {
      state.ingredientId = null;
    },
  },
});

export const { openIngredientDialog, closeIngredientDialog } = ingredientsActionsSlice.actions;

export default ingredientsActionsSlice.reducer;
