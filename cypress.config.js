const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xvjjon",
  video: true,
  reporter: "cypress-mochawesome-reporter",

  env: {
    hidexhr: true,
    amazon: "https://www.amazon.de",
    google: "https://www.google.com",
    saucedemo: "https://www.saucedemo.com",
  },

  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalWebKitSupport: true, // npm i -D playwright-webkit yuklenecek
    experimentalRunAllSpecs: true,
    //watchForFileChanges:false,  // otomatik testi durduruyor kaydettikten sonra
    experimentalStudio: true,
  },
});
