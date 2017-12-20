import React from 'react';
import { hydrate } from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import routes from '../routes/routes';

const AppRouter = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

hydrate(<AppRouter />, document.querySelector('#content'));
