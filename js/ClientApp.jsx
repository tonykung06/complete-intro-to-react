import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.jsx';
import Search from './Search.jsx';
import Details from './Details.jsx';
import Layout from './Layout.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {shows} from '../public/data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.assignShow = this.assignShow.bind(this);
  }

  assignShow(nextState, replace) {
    const showArray = shows.filter(item => nextState.params.id === item.imdbID);

    if (showArray.length < 1) {
      return replace('/');
    }

    Object.assign(nextState.params, showArray[0]);

    return nextState;
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Landing} />
          <Route path="/search" component={Search} shows={shows} />
          <Route path="/details/:id" component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
