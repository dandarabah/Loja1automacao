const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/common/*.feature",
    video: false,
    viewportWidth: 1400,
    viewportHeight: 860,
    env: {
      baseUrl: 'https://advantageonlineshopping.com/#'
    },
  },
});
