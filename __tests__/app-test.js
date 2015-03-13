'use strict';
jest.dontMock('../src/scripts/components/app.react.js');

var React = require('react/addons'),
 App = require('../src/scripts/components/app.react.js'),
 TestUtils = React.addons.TestUtils;

describe('App', function() {

 var AppElement = TestUtils.renderIntoDocument( < App / > );

 var list = TestUtils.scryRenderedDOMComponentsWithTag(AppElement, 'ul')[0];
 var items = TestUtils.scryRenderedDOMComponentsWithTag(AppElement, 'li');

 it('has 3 default items', function() {
  expect(list.props.children.length).toEqual(3);
 });

 it('has no selected items', function() {
  expect(AppElement.state.selectedItems.length).toEqual(0);
 });

 describe('clicking an item', function() {
  it('adds it to the selected items', function() {
   TestUtils.Simulate.click(items[0]);
   expect(AppElement.state.selectedItems.length).toEqual(1);
  });
 });
});
