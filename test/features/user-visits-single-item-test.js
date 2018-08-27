const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('user visit /items/create, fill out, and submit a new item',()=>{
  describe('views on single page',()=>{
    it('can see it rendered',()=>{
      const itemToCreate = buildItemObject();
      browser.url('/items/create');
      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
      browser.click('#submit-button');
      browser.click('.item-card a');
      assert.include(browser.getText('body'), itemToCreate.title);
    });
  });
});
