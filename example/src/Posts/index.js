import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavTab } from '../../../src';

export default ({ routes }) => (
  <div>
    {routes.filter(route => route.tab).map(({ path, tab }, i) => (
      <NavTab key={`tab_${i}`} to={path}>
        {tab}
      </NavTab>
    ))}

    {renderRoutes(routes)}
  </div>
);
