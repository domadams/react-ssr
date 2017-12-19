import React, {Component} from 'react';
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

export default AppRoot;