this.demoTestGoogleXpath = function (browser) {
  browser
    .url('https://www.convergely.com/')
    .waitForElementVisible('body', 1000)
    .useXpath() // every selector now must be xpath
    .click("//div[class=main-banner]")
    .useCss() // we're back to CSS now
};