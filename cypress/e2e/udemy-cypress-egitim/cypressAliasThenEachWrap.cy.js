describe("Alias, Then, Each, Wrap", () => {
  it("KUllanim Ornegi", () => {
    let itemlength;

    cy.visit("https://www.shopist.io/");

    cy.get(".navbar-section a").as("NavbarMenus"); // Alias kullanimi

    cy.get("@NavbarMenus")
      .then(($el) => {
        itemlength = $el.length;
      })
      .each(($el, index) => {
        //cy.log($el.text());

        cy.log("Navbar Menu " + index + ": " + $el.text());

        if ($el.text().includes("Bedding")) {
          cy.wrap($el).click({ force: true });
        }
      });
  });
});
