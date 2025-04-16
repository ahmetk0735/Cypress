const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    // baseUrl:"https://example.cypress.io/"

    env: {
      hidexhr: true,
      amazon: "https://www.amazon.de",
      google: "https://www.google.com",
      saucedemo: "https://www.saucedemo.com",
    },
  },
});
