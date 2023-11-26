const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    env: {
      lockedUser: 'locked_out_user'
    },
    setupNodeEvents(on, config){

    }
    //defaultCommandTimeout: 5500,
    //screenshotOnFailure: false,
    //chromeWebSecurity: false
  },
});
