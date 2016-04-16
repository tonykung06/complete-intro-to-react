import React from 'react';

const Layout = (props) => {
  return (
    <div className="app-container">
      {props.children}
    </div>
  );
};

const {element} = React.PropTypes;

Layout.propTypes = {
  children: element.isRequired
};

export default Layout;
