describe("My second Test Suite", () => {
  before(function () {
    // run once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(1) > .form-control").type(this.data.name);
    cy.get("select").select(this.data.gender);
  });
});
