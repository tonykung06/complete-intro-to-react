import React from 'react';
import {Link} from 'react-router';

const {func, bool, string} = React.PropTypes;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(e) {
    this.props.handleSearchTermChange(e.target.value);
  }
  
  render() {
    let utilSpace = null;

    if (this.props.showSearch) {
      utilSpace = (
        <input type="text" value={this.props.searchTerm} onChange={this.handleSearchTermChange} className="search-input" placeholder="Search" />
      );
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to="/search">
            Back
          </Link>
        </h2>
      );
    }

    return (
      <header className="header">
        <h1 className="brand">
          <Link to="/" className="brand-link">
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
};

export default Header;
