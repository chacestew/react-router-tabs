# React Router Tabs

Simple navigation tabs for React Router 4.

## Why?

There are many plain React solutions for tabs that conditionally render content based on some "activeTab" state. In a React Router app it would be preferable to keep rendering logic consistent by only using `<Route>`s. This library exports a simple wrapper component to turn any enclosing element into a path-aware navigation tab using React Router links.

### Benefits of this library

* Simplifies assigning tabs to paths
* Abstracts matching, setting active styles and onClick handling
* `<RoutedTabs>` compound component lets you set props for nested tabs (classnames, styles, path prefix, ...others)
* Easy to use with different route setups (see examples)
* Uses React Router's own API
* No state, no assertions about tab content, just navigation

## Installation

via [yarn](https://www.yarnpkj.com/)

    $ yarn add react-router-tabs
    
or [npm](https://www.npm.com/)

    $ npm install --save react-router-tabs

#### Strict dependencies

* react-router-dom
* prop-types

#### Peer dependencies

* react

## Usage

```js
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import { Admins, Moderators, Users } from './components';

// Using default styles:
import 'styles/react-router-tabs.css';

const UsersPage = ({ match }) => {
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

export default UsersPage;
```

## Components

#### `<RoutedTabs />`

Compound component to set props on enclosing `<NavTabs>`s.

(optional but recommended)

| Prop | Type | Default | Description |
| --- |----- | ------- | ----------------- |
| startPathWith | string | empty | String to append to the start of every tab's `path` to simplify writing out full paths. In most cases this should be given `props.match.path` |
| className | string | 'react-router-tabs' | Custom className for the enclosing `<div>`s |
| style | string | react-router-tabs' | Custom inline styles for the enclosing `<div>`s |
| tabClassName | string | 'react-router-tabs__tab' | Custom className to be provided to each tab |
| activeTabClassName | string | 'active' | Custom activeClassName to be provided to each tab |
| tabStyle | string | empty | Custom inline style to be provided to each tab |
| activeTabStyle | string | empty | Custom inline style to be provided to each tab |

#### `<NavTab />`

Forked and adapted from React Router's [`<NavLink />`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js). More info on below props in the official React Router docs.

| Prop | Type | Default | Description |
| --- |----- | ------- | ----------------- |
| to | string | **required** | Path to the route to be rendered |
| replace | bool | true | Replace current browser path rather than adding to the history |
| exact | bool | false | Require exact path match (won't work for nested routes) |
| strict | bool | true | Trailing slash considered for path match |
| disabled | bool | false | Sets disabled className/style and blocks onClick() |
| className | string | 'react-router-tabs' | Custom className for this tab |
| activeClassName | string | 'active' | Custom activeClassName for this tab |
| style | string | empty | Custom inline style |
| activeStyle | string | empty | Custom inline style when active |

## Styling

Both components can take various classname and inline style props. 

`<RoutedTabs>` will provide tabClassName/activeTabClassName and tabStyle/activeTabStyle to any nested `<NavTabs>`. Please see the API above for more detail. 

If no classnames or styles are provided, the default classnames will be used. A default stylesheet is provided in this repo (CSS/SASS versions) and can be imported like below:

```js
import 'node_modules/react-router-tabs/styles/react-router-tabs.css';
```

Note: the provided styles have not been tested.

## Acknowledgements

Thanks to the [React Router](https://github.com/ReactTraining/react-router) team. This module only exists to simplify one of a thousand use-cases for their great library.

## Author

Chace Stewart (<chacestew@gmail.com>)

## License

MIT