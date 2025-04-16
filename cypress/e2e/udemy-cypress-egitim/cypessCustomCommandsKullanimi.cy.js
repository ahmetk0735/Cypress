/*describe("Custom Commands", () => {
  it("Custom Commands Kullanim Ornek", () => {
    cy.visit("https://www.automationexercise.com/login");
    cy.get('input[data-qa="login-email"]').type("deneme@abc.com");
    cy.get('input[data-qa="login-password"]').type("denemeParola");
    cy.get('button[data-qa="login-button"]').click();
  });
});
*/

describe("Custom Commands", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/login");
  });
  it("Custom Commands Kullanim Ornek Invalid Username Valid Password", () => {
    cy.login("deneme@abc.com", "denemeParola");
  });

  it("Custom Commands Kullanim Ornek Valid Username invalid Password", () => {
    cy.login("deneme@gmail.com", "denemeParola2");
  });
});
