describe("Viewport Kullanimi", () => {
  it("viewport with numbers", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://shopist.io/");
  });
  it("viewport with stirng", () => {
    cy.viewport("macbook-16");
    cy.visit("https://shopist.io/");
  });
  it("viewport with stirng", () => {
    cy.viewport("iphone-se2");
    cy.visit("https://shopist.io/");
  });
});
