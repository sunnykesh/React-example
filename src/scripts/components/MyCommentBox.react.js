'use strict';

var React = require('react/addons');

var CommentList = React.createClass({
 render: function() {
  return ( < div className = "commentList" >
   Hello, world!I am a CommentList. < /div>
  );
 }
});

var CommentForm = React.createClass({
 render: function() {
  return ( < div className = "commentForm" >
   Hello, world!I am a CommentForm. < /div>
  );
 }
});

var MyCommentBox = React.createClass({
 render: function() {
  return ( < div className = "commentBox" >
   < span className = "comment-header" > Comments < /span>  < /div >
  );
 }
});

module.exports = MyCommentBox;
