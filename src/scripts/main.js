 'use strict';

 var ReactExampleApp = require('./components/ReactExampleApp.react');
 var React = require('react'),
 App = require('./components/app.react');

 React.render(<App />,  document.getElementById('componentTest'));
var MyCommentBox = require('./components/MyCommentBox.react');
//var HelloWorldTwo = require('./components/HelloWorld.react');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var CommentBox = React.createClass({
 render: function() {
  return (
   <div><MyCommentBox/>
   <div className="commentBox">
   Hello, world! I am a CommentBox.
   </div>
   </div>
  );
 }
});
React.render(
 <CommentBox />,
document.getElementById('contentTwo')
);

var Routes = (
  <Route handler={ReactExampleApp}>
    <Route name="/" handler={ReactExampleApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);

});

var HelloWorld = React.createClass({
 render: function() {
  return (
   <div >
   <p>
   Hello, <input type="text" placeholder="Your name here" /></p>
  <p>It is {this.props.date.toTimeString()}
   </p>
   </div>
  );
 }
});

setInterval(function() {
 React.render(
  <HelloWorld date={new Date()} />,
 document.getElementById('example')
);
}, 500);
