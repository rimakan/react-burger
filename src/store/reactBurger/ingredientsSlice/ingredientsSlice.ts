import { BASE_URL } from '../../../constants/constants';
import { Product } from '../../../models/product';
import { createAsyncThunk } from '../../redux';
import { createSlice } from '@reduxjs/toolkit';

const getBurgerIngredients = createAsyncThunk('reactBurger/burgerIngredientsSlice/getBurgerIngredients', async () => {
  const response = fetch(BASE_URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(`Произошла ошибка: ${res.status}`);
    })
    .catch((error) => console.error(error));

  return response.then((data) => data);
});

interface BurgerIngredientsSliceInitialState {
  ingredients: Product[];
}

const createInitialState = (): BurgerIngredientsSliceInitialState => ({
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
