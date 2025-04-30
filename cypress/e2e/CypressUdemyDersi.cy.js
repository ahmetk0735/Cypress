describe("CypressUdemyDersi", () => {
  it("tests CypressUdemyDersi", () => {
    cy.viewport(986, 680);
    cy.visit("https://www.shopist.io/");

    // 1. Kategoriye tıkla (ilk eşleşen öğe seçiliyor)
    cy.get("section div:nth-of-type(3)").first().should("be.visible").click();
    cy.location("href").should(
      "eq",
      "https://www.shopist.io/department/chairs"
    );

    // 2. Ürüne tıkla
    cy.get("div:nth-of-type(3) > div:nth-of-type(1) div > div")
      .first()
      .should("be.visible")
      .click();
    cy.location("href").should(
      "eq",
      "https://www.shopist.io/department/chairs/product/3"
    );

    // 3. Satın al → anasayfaya dön → yeniden kategoriye git
    cy.get("div.purchase-button").click();
    cy.get("div.navbar-small img").click();
    cy.location("href").should("eq", "https://www.shopist.io/");

    // 4. Menü → kategori seçimi → sepete git
    cy.get("div.navbar-small > div").click();
    cy.get("a:nth-of-type(6) > div").first().click();
    cy.location("href").should("eq", "https://www.shopist.io/cart");

    // 5. Ödeme ekranına geç
    cy.get("div.checkout").click();
  });
});
