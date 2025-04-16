describe("web scrapping", () => {
  it("write file to txt for products", () => {
    cy.visit("https://shopist.io/department/chairs");
    cy.get(".description").as("chairsPrice").its("length").should("eq", 9);

    const results = [];
    cy.get("@chairsPrice")
      .each(($el, index) => {
        cy.log("Results: " + index + "-" + $el.text());
        results.push($el.text());
      })
      .then(() => {
        cy.writeFile("CypressWriteFileDoc/chairsPrice.txt", results);
      });
  });
});
