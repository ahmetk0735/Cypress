describe("Before After Kullanmi", () => {
  before(() => {
    cy.log("Before Kullanimi- Cypress Test");
    cy.visit("https://www.automationexercise.com/");
  });

  after(() => {
    cy.log("After Kullanimi icin bir ornek");
  });
  it("Basligi Dogrulama", () => {
    cy.title().should("include", " Exercise");
  });
});
