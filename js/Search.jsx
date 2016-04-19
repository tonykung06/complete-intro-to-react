import React from 'react';
import ShowCard from './ShowCard.jsx';
import Header from './Header.jsx';
import {connector} from './Store.jsx';

const {object, string} = React.PropTypes;

class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <Header showSearch />
        <div className="shows">
          {
            this.props.route.shows.filter(show => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) > -1;
            }).map(show => <ShowCard {...show} key={show.imdbID} />)
          }
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  route: object,
  searchTerm: string
};

export default connector(Search);
