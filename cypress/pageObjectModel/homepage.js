export class Homepage {
  navigate() {
    cy.visit("https://www.cypress.io/");
  }

  pricingBtn() {
    cy.get('nav a[href="/pricing"]');
  }
}
