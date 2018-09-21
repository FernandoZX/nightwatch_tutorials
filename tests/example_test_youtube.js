module.exports = {
  'Demo test Youtube' : function (browser) {
    browser
      .url('https://www.youtube.com/')
      .waitForElementVisible('body', 2000)
      .setValue('input[name=search_query]', 'ready for duel')
      .waitForElementVisible('button[id=search-icon-legacy]', 1000)
      .click('button[id=search-icon-legacy]')
      .pause(1000)
      .assert.containsText('.style-scope ytd-channel-renderer', 'ReadyForDuel')
      .end();
  }
};