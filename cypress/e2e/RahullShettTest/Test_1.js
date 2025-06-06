describe("My First Test Suite", () => {
  it("My FirstTest case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(3000);
    // selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    // Parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });

    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });
    const logo = cy.get(".brand");
    //cy.log(cy.get(".brand").text());
    //cy.log(logo.text())
  });
});
