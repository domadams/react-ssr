import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

class AppRoot extends Component {
  render() {
    return (
      <div>
        <main>
          {renderRoutes(this.props.route.routes)}
        </main>
      </div>
    );
  }
}

AppRoot.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default AppRoot;
