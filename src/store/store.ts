import { configureStore, combineReducers } from '@reduxjs/toolkit';
import burgerIngredientsSlice from './reactBurger/ingredientsSlice/ingredientsSlice';
import burgerIngredientsActionsSlice from './reactBurger/ingredientsSlice/ingredientsSliceActions';
import burgerConstructorSlice from './reactBurger/constructorSlice/constructorSlice';

const rootReducer = combineReducers({
  reactBurger: combineReducers({
    burgerIngredients: burgerIngredientsSlice,
    burgerIngredientsActions: burgerIngredientsActionsSlice,
    burgerConstructor: burgerConstructorSlice,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
