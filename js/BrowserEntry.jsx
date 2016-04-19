import React from 'react';
import ReactDOM from 'react-dom';
import App from './ClientApp.jsx';
import {match} from 'react-router';

match({
  history: App.History,
  routes: App.Routes
}, (err, redirectLocation, renderProps) => {
  if (err) {
    return console.err('BrowserEntry error', err);
  }

  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'));
});
