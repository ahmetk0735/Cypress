describe("Cypress ile Ilk Test", () => {
  it("ilk test", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.url().should("eq", "https://www.automationexercise.com/");
  });
  it("ikinci test", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.title().should("include", " Exercise");
    cy.url().should("include", "automationexercise.com");
  });
});
