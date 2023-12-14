import { createSlice } from '@reduxjs/toolkit';
import { Product, ProductType } from '../../../models/product';
import { Order } from '../../../models/order';
import { createAsyncThunk } from '../../redux';
import { fetchWithRefresh } from '../../../components/utils/responseUtils';

interface ConstructorSliceInitialState {
  burgerConstructorIngredients: Product[];
  isBunPresent: boolean;
  orderPrice: number;
  relatedData: {
    order?: Order;
    replacedProduct: Product | null;
  };
}

const createOrder = createAsyncThunk('reactBurger/burgerConstructor/createOrder', async (ingredients: Product[]) => {
  const ingredientsIds = ingredients.map(({ _id }) => _id);
  const body = {
    ingredients: ingredientsIds,
  };

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return fetchWithRefresh<Order>('orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // prettier-ignore
        'Authorization': accessToken,
      },
      body: JSON.stringify(body),
    }).then((data) => data);
  }
});

export const createInitialState = (): ConstructorSliceInitialState => ({
  burgerConstructorIngredients: [],
  isBunPresent: false,
  orderPrice: 0,
  relatedData: {
    order: undefined,
    replacedProduct: null,
  },
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
          state.burgerConstructorIngredients.pop();
          state.burgerConstructorIngredients.push(action.payload);
        } else {
          state.burgerConstructorIngredients.unshift(action.payload);
          state.burgerConstructorIngredients.push(action.payload);
        }
        state.isBunPresent = true;
      } else {
        state.burgerConstructorIngredients.splice(1, 0, action.payload);
      }
    },
    removeIngredientFromConstructor(state, action) {
      state.burgerConstructorIngredients = state.burgerConstructorIngredients.filter(
        ({ dragId }) => dragId !== action.payload,
      );
    },
    cleanupConstructor() {
      return createInitialState();
    },
    setReplacedIngredient(state, action) {
      state.relatedData.replacedProduct = action.payload;
    },
    sortIngredients(state, action) {
      const from = Object.assign(action.payload.from);
      const to = Object.assign(action.payload.to);
      const burgerConstructorIngredients = [...state.burgerConstructorIngredients];
      const toIndex = burgerConstructorIngredients.findIndex(({ dragId }) => dragId === to.dragId);
      const fromIndex = burgerConstructorIngredients.findIndex(({ dragId }) => dragId === from.dragId);
      [burgerConstructorIngredients[toIndex], burgerConstructorIngredients[fromIndex]] = [
        burgerConstructorIngredients[fromIndex],
        burgerConstructorIngredients[toIndex],
      ];
      state.burgerConstructorIngredients = burgerConstructorIngredients;
    },
  },
  extraReducers(builder) {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.relatedData.order = action.payload;
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.relatedData.order = undefined;
    });
  },
});

const {
  getOrderPrice,
  addIngredientToConstructor,
  removeIngredientFromConstructor,
  cleanupConstructor,
  sortIngredients,
  setReplacedIngredient,
} = burgerConstructorSlice.actions;
export {
  getOrderPrice,
  addIngredientToConstructor,
  removeIngredientFromConstructor,
  cleanupConstructor,
  createOrder,
  sortIngredients,
  setReplacedIngredient,
};
export default burgerConstructorSlice.reducer;
