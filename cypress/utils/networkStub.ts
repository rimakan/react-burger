import { BASE_URL } from '../../src/constants/constants';

export const networkStub = () => {
  localStorage.setItem('accessToken', 'token');
  cy.intercept('POST', `${BASE_URL}/orders`, { fixture: 'order.json' }).as('createOrder');
  cy.intercept('GET', `${BASE_URL}/auth/user`, { fixture: 'user.json' }).as('user');
};
