import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.jsx';
import Search from './Search.jsx';
import Details from './Details.jsx';
import Layout from './Layout.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {store} from './Store.jsx';
import {Provider} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Landing} />
            <Route path="/search" component={Search} />
            <Route path="/details/:id" component={Details} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
