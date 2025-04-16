describe("Cypress Test Isolation", { testIsolation: false }, () => {
  it("Dosya Yukleme-1", () => {
    cy.visit("https://www.qrcode-monkey.com/");
    cy.get("div:nth-child(3)>div.pane-header>h3").click();
    cy.get(".logo-preview").attachFile(
      { filePath: "photo.jpeg" },
      { subjectType: "drag-n-drop" }
    );
  });

  it("Dosya Yukleme-2", () => {
    const fileName = "antalya.jpg";
    cy.fixture("antalya.jpg")
      .then(Cypress.Blob.base64StringToBlob) //convert islemi cin
      .then((fileContent) => {
        cy.get(".logo-preview").attachFile(
          {
            fileContent,
            fileName,
            mimeType: "image/**",
          },
          { subjectType: "drag-n-drop" }
        );
      });
  });
});
