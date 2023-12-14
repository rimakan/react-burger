import constructorSlice, {
  addIngredientToConstructor,
  getOrderPrice,
  removeIngredientFromConstructor,
  sortIngredients,
  createInitialState,
} from './constructorSlice';
import { ingredients } from '../../../tests/testData';
import { ProductType } from '../../../models/product';

describe('constructorSlice', () => {
  const constructorSliceInitialState = createInitialState();

  const [bun] = ingredients;

  const burgerConstructorIngredients = [bun, ingredients[1], ingredients[2], bun];

  const noBunIngredients = ingredients.filter(({ type }) => type !== ProductType.Bun);
  const randomInt = Math.trunc(Math.random() * noBunIngredients.length);
  const ingredient = noBunIngredients[randomInt];

  it('should handle initial state', () => {
    const action = { type: 'unknown' };

    expect(constructorSlice(constructorSliceInitialState, action)).toEqual(constructorSliceInitialState);
  });

  it('should add two buns to the constructor', () => {
    const action = addIngredientToConstructor(bun);
    const expectedState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients: [bun, bun],
      isBunPresent: true,
    };

    expect(constructorSlice(constructorSliceInitialState, action)).toEqual(expectedState);
  });

  it('should add ingredients to the constructor when it is blank', () => {
    const action = addIngredientToConstructor(ingredient);
    const expectedState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients: [ingredient],
      isBunPresent: false,
    };

    expect(constructorSlice(constructorSliceInitialState, action)).toEqual(expectedState);
  });

  it('should add ingredients to the constructor when it has some ingredients', () => {
    const action = addIngredientToConstructor(noBunIngredients[randomInt]);
    const burgerConstructorIngredientsInitialState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients: [bun, ingredients[1], ingredients[2], bun],
      isBunPresent: true,
    };
    const expectedState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients: [bun, ingredient, ingredients[1], ingredients[2], bun],
      isBunPresent: true,
    };

    expect(constructorSlice(burgerConstructorIngredientsInitialState, action)).toEqual(expectedState);
  });

  it('should remove the ingredient from the constructor', () => {
    const action = removeIngredientFromConstructor(ingredients[1].dragId);
    const burgerConstructorIngredientsInitialState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients,
      isBunPresent: true,
    };
    const expectedState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients: [bun, ingredients[2], bun],
      isBunPresent: true,
    };

    expect(constructorSlice(burgerConstructorIngredientsInitialState, action)).toEqual(expectedState);
  });

  it('should sort ingredients successfully', () => {
    const from = ingredients[1];
    const to = ingredients[2];
    const action = sortIngredients({ from, to });
    const burgerConstructorIngredientsInitialState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients,
      isBunPresent: true,
    };
    const expectedState = {
      ...constructorSliceInitialState,
      burgerConstructorIngredients: [bun, ingredients[2], ingredients[1], bun],
      isBunPresent: true,
    };

    expect(constructorSlice(burgerConstructorIngredientsInitialState, action)).toEqual(expectedState);
  });

  it('should count the order price correctly', () => {
    const action = getOrderPrice(burgerConstructorIngredients);
    const orderPrice = burgerConstructorIngredients.reduce((prev, current) => prev + current.price, 0);
    const expectedState = { ...constructorSliceInitialState, orderPrice };

    expect(constructorSlice(constructorSliceInitialState, action)).toEqual(expectedState);
  });
});
