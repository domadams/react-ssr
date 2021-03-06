/** ********************************************************************
 * Server Router
 *
 * This exports a function that returns an Express
 * middleware handle to render the application using React-Router
 ******************************************************************** */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../shared/routes';
import htmlTemplate from './html-template';

export default () => (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>,
  );

  res.status(200).send(htmlTemplate('Blue Monkey', content));
};
