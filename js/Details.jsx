import React from 'react';

const {object} = React.PropTypes;

class Details extends React.Component {
  render() {
    const params = this.props.params || {};
    const {title, description, year, poster, trailer} = params;

    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">svideo</h1>
        </header>
        <div className="video-info">
          <h1 className="video-title">
            {title}
          </h1>
          <h1 className="video-year">({year})</h1>
          <img src={`public/img/posters/${poster}`} alt="" className="video-poster"/>
          <p className="video-description">{description}</p>
        </div>
        <div className="video-container">
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameborder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  params: object
};

export default Details;
