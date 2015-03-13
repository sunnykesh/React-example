// To transform JSX a helper function is required.
//preprocessor.js file to do the work.

var ReactTools = require('react-tools');

module.exports = {
 process: function(src) {
  return ReactTools.transform(src);
 }
};
