describe("Automate check boxes", () => {
  it("My firstTest case", () => {
    cy.visit("https://qaclickacademy.com/practice.php");

    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      const text = $e1.text(); // ← DOĞRU kullanım

      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function ($price) {
            const priceText = $price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
