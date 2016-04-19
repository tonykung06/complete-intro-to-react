import React from 'react';
import Header from './Header';
import {connector} from './Store';
import axios from 'axios';

const {object, arrayOf} = React.PropTypes;

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      omdbData: {}
    };
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?i=${this.getCurrentShow(this.props.shows, this.props.params.id).imdbID}`).then(response => {
      this.setState({omdbData: response.data});
    }).catch(error => {
      console.error('axios error', error);
    });
  }

  getCurrentShow(shows, id) {
    const showArray = shows.filter(item => id === item.imdbID);

    return showArray[0];
  }

  render() {
    const {title, description, year, poster, trailer} = this.getCurrentShow(this.props.shows, this.props.params.id) || {};
    let rating;

    if (this.state.omdbData.imdbRating) {
      rating = <h3 className="video-rating">{this.state.omdbData.imdbRating}</h3>;
    }

    return (
      <div className="container">
        <Header />
        <div className="video-info">
          <h1 className="video-title">
            {title}
          </h1>
          <h1 className="video-year">
            ({year})
          </h1>
          {rating}
          <img src={`/public/img/posters/${poster}`} alt="" className="video-poster"/>
          <p className="video-description">{description}</p>
        </div>
        <div className="video-container">
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  params: object,
  shows: arrayOf(object).isRequired
};

export default connector(Details);
