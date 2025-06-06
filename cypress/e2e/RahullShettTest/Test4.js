describe("Automate check boxes", () => {
  it("My firstTest case", () => {
    // Check boxes
    cy.visit("https://qaclickacademy.com/practice.php");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    //window:alert
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
    cy.get("#opentab").invoke("removeAttr", "target").click();
  });
});
