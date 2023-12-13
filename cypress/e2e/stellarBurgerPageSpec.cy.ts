/* eslint-disable prettier/prettier */
import { stellarBurgerPage } from './pages/stellarBurger.po';
import { networkStub } from '../utils/networkStub';
import '../support/e2e';

describe('stellarBurgerPage', () => {
  const ingredients = ['[data-testid="bun_0"]', '[data-testid="sauce_1"]', '[data-testid="main_1"]'];

  it('should open the ingredient dialog', () => {
    stellarBurgerPage.visit();
    const [ingredient] = ingredients;
    stellarBurgerPage.openIngredientModal(ingredient);
    cy.get('[data-testid="productName"').should('have.text', 'Краторная булка N-200i');
    stellarBurgerPage.closeModal();
  });

  it('should add ingredients to the constructor', () => {
    stellarBurgerPage.addIngredientsToConstructor(ingredients);
    cy.get('.constructor-element').should('have.length', 4);
  });

  it('should not create an order when a user is not logged in', () => {
    stellarBurgerPage.addIngredientsToConstructor(ingredients);
    stellarBurgerPage.submitOrder();
    cy.url().should('eq', 'http://localhost:3000/login');
  });

  it('should create an order when a user is logged in', () => {
    networkStub();
    stellarBurgerPage.addIngredientsToConstructor(ingredients);
    stellarBurgerPage.submitOrder();
    cy.wait('@user');
    cy.wait('@createOrder');
    cy.get('[data-testid="orderNumber"').should('have.text', '1337');
    stellarBurgerPage.closeModal();
  });
});
