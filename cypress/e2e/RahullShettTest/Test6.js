describe("Origin-safe test", () => {
  it("Should handle alerts and child window using cy.origin", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#alertbtn").click();
    cy.get("[value='Confirm']").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    cy.get("#opentab").invoke("removeAttr", "target").click();

    // Güvenli geçiş: farklı domain için origin bloğu
    cy.origin("https://www.qaclickacademy.com", () => {
      cy.url().should("include", "qaclickacademy");
    });

    cy.go("back");
  });
});
