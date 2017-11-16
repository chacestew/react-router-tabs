import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from '../../../src';
import { Admins, Moderators, Users } from './components';

export default ({ match }) => {
  return (
    <div>
      <RoutedTabs startPathWith={match.path}>
        <NavTab to="/admins">Admins</NavTab>
        <NavTab to="/moderators">Moderators</NavTab>
        <NavTab to="/users">Users</NavTab>
      </RoutedTabs>

      <Switch>
        <Route exact path={`${match.path}`} render={() => <Redirect replace to={`${match.path}/admins`} />} />
        <Route path={`${match.path}/admins`} component={Admins} />
        <Route path={`${match.path}/moderators`} component={Moderators} />
        <Route path={`${match.path}/users`} component={Users} />
      </Switch>
    </div>
  );
};
