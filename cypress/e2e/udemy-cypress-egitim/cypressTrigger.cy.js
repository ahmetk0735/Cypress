describe("Trigger Kullanimi", () => {
  it("Mouseover Kullanimi", () => {
    cy.visit("https://www.amazon.de/");
    cy.get("span#nav-link-accountList-nav-line-1").trigger("mouseover");

    cy.get("div#nav-al-your-account a:nth-child(2)>span").click();
  });
});
