import React from 'react';
import Landing from './Landing.jsx';
import Search from './Search.jsx';
import Details from './Details.jsx';
import Layout from './Layout.jsx';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {store} from './Store.jsx';
import {Provider} from 'react-redux';

const getRoutes = () => {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing} />
      <Route path="/search" component={Search} />
      <Route path="/details/:id" component={Details} />
    </Route>
  );
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {getRoutes()}
        </Router>
      </Provider>
    );
  }
}

App.getRoutes = getRoutes;

module.exports = App;
