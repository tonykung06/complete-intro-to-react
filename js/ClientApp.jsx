import React from 'react';
import Layout from './Layout.jsx';
import {Router, browserHistory} from 'react-router';
import {store} from './Store.jsx';
import {Provider} from 'react-redux';

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');// shim for node.js
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent(location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'));
      });
    }
  },
  childRoutes: [{
    path: 'search',
    getComponent(location, cb) {
      require.ensure([], () => {
        cb(null, require('./Search'));
      });
    }
  }, {
    path: 'details/:id',
    getComponent(location, cb) {
      require.ensure([], () => {
        cb(null, require('./Details'));
      });
    }
  }]
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    );
  }
}

App.Routes = rootRoute;
App.History = browserHistory;

module.exports = App;
