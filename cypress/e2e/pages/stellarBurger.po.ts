class StellarBurgerPage {
  public visit(): void {
    cy.visit('/');
  }

  public addIngredientsToConstructor(ingredients: string[]): void {
    this.visit();
    cy.addIngredientsToConstructor(ingredients);
  }

  public submitOrder(): void {
    cy.get(`[data-testid="submit"`).click();
  }

  public openIngredientModal(ingredient) {
    cy.get(ingredient).click();
  }

  public closeModal() {
    cy.clickButton('closeModal');
  }
}

export const stellarBurgerPage = new StellarBurgerPage();
