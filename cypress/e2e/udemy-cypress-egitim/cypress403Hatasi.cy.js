describe("403 Hatasina Karsi Cozum", () => {
  it("403 Hatasi Sorunu", () => {
    cy.visit("https://www.airbnb.de/"),
      {
        headers: {
          "User-Agent": "axios/0.27.1", //HAta olursa headres kismini ekle
        },
      };
  });
});
