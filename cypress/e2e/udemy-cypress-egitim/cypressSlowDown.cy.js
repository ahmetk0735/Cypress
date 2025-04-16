import { slowCypressDown } from "cypress-slow-down";

const { faker } = require("@faker-js/faker");

let fakeEmail = faker.internet.email();
let fakePassword = faker.internet.password();
let fakeName = faker.name.firstName();
slowCypressDown(false);
describe("Low Down  Kullanimi", () => {
  it("slowdwon ile ornek test", () => {
    cy.slowDown(2000);
    cy.visit("https://www.automationexercise.com/login");

    cy.get("input[data-qa='login-email']").type(fakeEmail);
    cy.get("input[data-qa='login-password']").type(fakePassword);
    cy.get("[data-qa='login-email']").click();
    cy.slowDownEnd();
  });

  it("slowdown ile ornek test-2", () => {
    cy.visit("https://www.automationexercise.com/login");

    cy.get("input[data-qa='login-email']").type(fakeName);
    cy.get("input[data-qa='login-password']").type(fakePassword);
    cy.get("[data-qa='login-email']").click();

    cy.get("input[data-qa='login-email']")
      .invoke("prop", "validationMessage")
      .should("include", "Please include an '@' in the email address");
  });
});
