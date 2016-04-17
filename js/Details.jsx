import React from 'react';

class Details extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>hihi</h1>
        <pre>
          <code>{JSON.stringify(this.props, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

export default Details;
