import React from 'react';
import { renderRoutes } from 'react-router-config';
import { RoutedTabs, NavTab } from '../../../src';

export default ({ routes }) => (
  <div>
    <RoutedTabs>
      {routes.filter(route => route.tab).map(({ path, tab }, i) => (
        <NavTab key={i} to={path}>
          {tab}
        </NavTab>
      ))}
    </RoutedTabs>

    {renderRoutes(routes)}
  </div>
);
