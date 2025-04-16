describe("Cypress Write File", () => {
  it("write file", () => {
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Sifirdan Cypress DErslerine Hosgeldiniz.\n"
    );
    cy.writeFile(
      "CypressWriteFileDoc/exampleFile.txt",
      "Bu egitim serisinde sifirdan ileri seviyeye cypress ogreneceksiniz",
      { flag: "a+" }
    );
  });
});
