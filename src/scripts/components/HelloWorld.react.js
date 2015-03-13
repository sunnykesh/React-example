/** @jsx React.DOM */

var React = require('react/addons');

var HelloWorldTwo = React.createClass({
 render: function() {
  return ( < div >
   < p >
   Hello, < input type = "text"
   placeholder = "Your name here" / > ! < /p> < p > It is {
   this.props.date.toTimeString()
  } < /p> < /div >
 );
}
});


module.exports = HelloWorldTwo;
