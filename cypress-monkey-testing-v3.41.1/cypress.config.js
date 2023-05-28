const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
