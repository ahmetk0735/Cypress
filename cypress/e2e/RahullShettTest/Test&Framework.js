describe("My second Test Suite", () => {
  before(function () {});
  it("My FirstTest case", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(1) > .form-control").type("Bob");
    cy.get("select").select("Female");
  });
});
