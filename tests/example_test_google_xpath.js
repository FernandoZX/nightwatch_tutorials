this.demoTestGoogleXpath = function (browser) {
  browser
    .url('https://www.convergely.com/')
    .waitForElementVisible('body', 1000)
    .useXpath() // every selector now must be xpath
    .click("//a[normalize-space()='Pricing']")
    .pause(1000)
    .useCss()
    .assert.urlEquals('https://www.convergely.com/pricing')
    .pause(1000)
    .end();
    
};