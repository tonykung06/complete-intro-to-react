import React from 'react';
import ShowCard from './ShowCard.jsx';
const {arrayOf, object} = React.PropTypes;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

  handleSearchTermEvent(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">svideo</h1>
          <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermEvent} className="search-input" placeholder="Search" />
        </header>
        <div className="shows">
          {
            this.props.route.shows.filter(show => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) > -1;
            }).map(show => <ShowCard {...show} key={show.imdbID} />)
          }
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  route: object
};

export default Search;
