class HomepageSecond {
  navigate() {
    cy.visit("https://www.cypress.io/");
  }

  get pricingBtn() {
    cy.get('nav a[href="/pricing"]').click();
  }
}

export default new HomepageSecond();
