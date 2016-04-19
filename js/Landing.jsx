import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connector} from './Store.jsx';

const {func, string} = React.PropTypes;

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.gotoSearch = this.gotoSearch.bind(this);
  }
  handleSearchTermChange(e) {
    this.props.setSearchTerm(e.target.value);
  }
  gotoSearch(e) {
    e.preventDefault();
    browserHistory.push('search');
  }
  render() {
    return (
      <div className="home-info">
        <h1 className="title">svideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermChange} className="search" type="text" placeholder="Search" />
        </form>
        <Link to="/search" className="browse-all"> or Browse All</Link>
      </div>
    );
  }
}

Landing.propTypes = {
  setSearchTerm: func,
  searchTerm: string
};

export default connector(Landing);
