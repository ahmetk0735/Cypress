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
