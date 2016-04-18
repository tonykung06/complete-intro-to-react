import React from 'react';
import ShowCard from './ShowCard.jsx';
import Header from './Header.jsx';

const {arrayOf, object} = React.PropTypes;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(searchTerm) {
    this.setState({
      searchTerm
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch={true}
        />
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
