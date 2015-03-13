'use strict';

var React = require('react/addons');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');



var ReactExampleApp = React.createClass({
 render: function() {
  return ( < div className = 'main' >
   < p > Default changed... < /p>  < /div >
  );
 }
});

module.exports = ReactExampleApp;
