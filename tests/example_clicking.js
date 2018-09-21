module.exports = {
  'Demo clicking component' : function (browser) {
    browser
      .url('https://www.convergely.com/')
      .waitForElementVisible('body', 2000)
      .useXpath()
      .click("//a[normalize-space()='Help']")
      .pause(1000)
      .useCss()
      .assert.urlEquals('https://docs.convergely.com/')
      .pause(1000)
      .end();
  }
};