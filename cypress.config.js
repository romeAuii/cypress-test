const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
