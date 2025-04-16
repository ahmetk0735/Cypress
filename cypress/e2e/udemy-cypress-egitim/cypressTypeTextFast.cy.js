describe("Hizli text yazimi", () => {
  it("Hizli text Yazimi testi", () => {
    cy.visit("https://www.automationexercise.com/contact_us");
    cy.get("#message").type(
      "If you have any suggestion areas or improvements, do let us know. We will definitely work on it."
    );
  });
  it("Hizli text Yazimi testi-2", () => {
    cy.visit("https://www.automationexercise.com/contact_us");
    cy.get("#message").type(
      "If you have any suggestion areas or improvements, do let us know. We will definitely work on it.",
      { delay: 0 }
    );
  });
});
