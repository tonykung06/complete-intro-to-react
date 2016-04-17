require('babel-register');
require('babel-polyfill');

//lightweight DOM mockup that your tests can interact with
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
