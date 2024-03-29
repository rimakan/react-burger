import { sendRequest } from '../../../components/utils/responseUtils';
import { Product } from '../../../models/product';
import { IngredientsResponse } from '../../../models/response';
import { createAsyncThunk } from '../../redux';
import { createSlice } from '@reduxjs/toolkit';

const getBurgerIngredients = createAsyncThunk('reactBurger/burgerIngredientsSlice/getBurgerIngredients', async () => {
  return sendRequest<IngredientsResponse>('ingredients').then((data) => data);
});

interface BurgerIngredientsSliceInitialState {
  ingredients: Product[];
}

export const createInitialState = (): BurgerIngredientsSliceInitialState => ({
  ingredients: [],
});

const burgerIngredientsSlice = createSlice({
  name: 'reactBurger/burgerIngredientsSlice',
  initialState: createInitialState(),
  reducers: {
    cleanupIngredients() {
      return createInitialState();
    },
  },
  extraReducers(builder) {
    builder.addCase(getBurgerIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload.data;
    });
    builder.addCase(getBurgerIngredients.rejected, (state) => {
      state.ingredients = [];
    });
  },
});

const { cleanupIngredients } = burgerIngredientsSlice.actions;
export { getBurgerIngredients, cleanupIngredients };
export default burgerIngredientsSlice.reducer;
