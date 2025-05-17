describe("Automate check boxes", () => {
  it("My firstTest case", () => {
    // Check boxes
    cy.visit("https://qaclickacademy.com/practice.php");

    //cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
