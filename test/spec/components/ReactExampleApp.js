'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactExampleApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactExampleApp = require('components/ReactExampleApp.js');
    component = React.createElement(ReactExampleApp);
  });

  it('should create a new instance of ReactExampleApp', function () {
    expect(component).toBeDefined();
  });
});
