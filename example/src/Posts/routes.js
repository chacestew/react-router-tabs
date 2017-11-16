import React from 'react';
import { Redirect } from 'react-router-dom';

import Posts from '.';
import { Drafts, Published, Deleted } from './components';

export default [
  {
    path: '/posts',
    component: Posts,
    routes: [
      {
        path: '/posts',
        exact: true,
        component: () => <Redirect replace to="/posts/drafts" />
      },
      {
        path: '/posts/drafts',
        component: Drafts,
        tab: 'Drafts'
      },
      {
        path: '/posts/published',
        component: Published,
        tab: 'Published'
      },
      {
        path: '/posts/deleted',
        component: Deleted,
        tab: 'Deleted'
      }
    ]
  }
];
