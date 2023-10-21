import { configureStore, combineReducers } from '@reduxjs/toolkit';
import burgerIngredientsSlice from './reactBurger/ingredientsSlice/ingredientsSlice';
import burgerIngredientsActionsSlice from './reactBurger/ingredientsSlice/ingredientsSliceActions';
import burgerConstructorSlice from './reactBurger/constructorSlice/constructorSlice';
import authSlice from './auth/auth';
import userSlice from './user/user';
import { apiMiddleware } from './apiMiddleware';

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  reactBurger: combineReducers({
    burgerIngredients: burgerIngredientsSlice,
    burgerIngredientsActions: burgerIngredientsActionsSlice,
    burgerConstructor: burgerConstructorSlice,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});

export type StoreState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
