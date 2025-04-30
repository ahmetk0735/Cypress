describe("Screenshot Kullanimi", () => {
  it("Ekran goruntusu alalim", () => {
    cy.visit("https://www.google.com");
    cy.screenshot();
  });
});
