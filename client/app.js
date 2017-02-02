import ReactDOM from 'react-dom';
import React from 'react';
import Index from './index';

ReactDOM.render(<Index />, document.getElementById('app'));

//changed?

// // Are we in development mode?
// if (module.hot) {
//   // Whenever a new version of App.js is available
//   module.hot.accept('./index', function () {
//     // Require the new version and render it instead
//     var NextApp = require('./index')
//     ReactDOM.render(<Index />, document.getElementById('app'))
//   })
// }