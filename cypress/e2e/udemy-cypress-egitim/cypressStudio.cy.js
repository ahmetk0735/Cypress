describe("Cypress Studio Kullanimi", () => {
  it("ornek kullanimi", () => {
    cy.visit("https://www.shopist.io/");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("testStudio_1", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://www.shopist.io/");
    cy.get(":nth-child(3) > .jumbotron-box > :nth-child(3)").click();
    cy.get(":nth-child(4) > :nth-child(1) > .product-card > .status").click();
    cy.get(".modal-button").click();
    cy.get(":nth-child(7) > :nth-child(1) > a > .product-card > img").click();

    /* ==== End Cypress Studio ==== */
  });
});
