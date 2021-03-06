import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../shared/routes';

const AppRouter = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

hydrate(<AppRouter />, document.querySelector('#content'));
