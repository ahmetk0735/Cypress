describe("BeforeEach  AfterEach Kullanmi", () => {
  beforeEach(() => {
    cy.log("BeforeEach Kullanimi- Cypress Test");
    cy.visit("https://www.automationexercise.com/");
  });

  afterEach(() => {
    cy.log("AfterEach Kullanimi icin bir ornek");
  });
  it("Basligi Dogrulama", () => {
    cy.title().should("eq", "Automation Exercise");
  });

  it("url dogrula", () => {
    cy.url().should("include", "automation");
  });

  it("hostname dogrula", () => {
    cy.location("hostname").should("include", "automation");
  });
});
