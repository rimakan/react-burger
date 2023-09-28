import { createSlice } from '@reduxjs/toolkit';
import { Product, ProductType } from '../../../models/product';

interface ConstructorSliceInitialState {
  burgerConstructorIngredients: Product[];
  orderPrice: number;
}

const createInitialState = (): ConstructorSliceInitialState => ({
  burgerConstructorIngredients: [],
  orderPrice: 0,
});

const burgerConstructorSlice = createSlice({
  name: 'reactBurger/burgerConstructorSlice',
  initialState: createInitialState(),
  reducers: {
    getOrderPrice(state, action) {
      state.orderPrice = action.payload.reduce((prev: number, acc: Product) => prev + acc.price, 0);
    },
    addIngredientToConstructor(state, action) {
      if (action.payload.type === ProductType.Bun) {
        if (state.burgerConstructorIngredients[0]?.type === ProductType.Bun) {
          state.burgerConstructorIngredients.splice(0, 1, action.payload);
        } else {
          state.burgerConstructorIngredients.unshift(action.payload);
        }
      } else {
        state.burgerConstructorIngredients.push(action.payload);
      }
    },
  },
});

const { getOrderPrice, addIngredientToConstructor } = burgerConstructorSlice.actions;
export { getOrderPrice, addIngredientToConstructor };
export default burgerConstructorSlice.reducer;
