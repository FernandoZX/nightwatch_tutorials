module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.com.co/')
      .waitForElementVisible('body', 2000)
      .setValue('input[type=text]', 'ready for duel')
      .waitForElementVisible('input[class=lsb]', 1000)
      .click('input[class=lsb]')
      .pause(1000)
      .assert.containsText('#main', 'ReadyForDuel')
      .end();
  }
};