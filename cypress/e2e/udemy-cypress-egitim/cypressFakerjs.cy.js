const { faker } = require("@faker-js/faker");

let fakeEmail = faker.internet.email();
let fakePassword = faker.internet.password();
let fakeName = faker.name.firstName();

describe("FakerJs Kullanimi", () => {
  it("fakerjs ile ornek test", () => {
    cy.visit("https://www.automationexercise.com/login");

    cy.get("input[data-qa='login-email']").type(fakeEmail);
    cy.get("input[data-qa='login-password']").type(fakePassword);
    cy.get("[data-qa='login-email']").click();
  });

  it("fakerjs ile ornek test-2", () => {
    cy.visit("https://www.automationexercise.com/login");

    cy.get("input[data-qa='login-email']").type(fakeName);
    cy.get("input[data-qa='login-password']").type(fakePassword);
    cy.get("[data-qa='login-email']").click();

    cy.get("input[data-qa='login-email']")
      .invoke("prop", "validationMessage")
      .should("include", "Please include an '@' in the email address");
  });
});
