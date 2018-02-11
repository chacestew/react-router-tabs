# React Router Tabs
[![npm](https://img.shields.io/npm/v/react-router-tabs.svg)](https://www.npmjs.com/package/react-router-tabs)
[![npm](https://img.shields.io/npm/dm/react-router-tabs.svg)](https://www.npmjs.com/package/react-router-tabs)
[![GitHub stars](https://img.shields.io/github/stars/chacestew/react-router-tabs.svg?style=social&label=Stars)](https://github.com/chacestew/react-router-tabs)

Simple navigation tabs for React Router 4.

![preview-gif](https://user-images.githubusercontent.com/21122529/32943041-911cf582-cb93-11e7-831e-6765a299326d.gif)

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

#### Dependencies

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
      <RoutedTabs startPathWith={match.path}> // Optional helper
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

#### `<NavTab />`

Forked and adapted from React Router's [`<NavLink />`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js). More info on below props in the official React Router docs.

| Prop | Type | Default | Description |
| --- |----- | ------- | ----------------- |
| to | string | **required** | Path to the route to be rendered |
| replace | bool | true | Replace current browser path rather than adding to the history |
| exact | bool | false | Require exact path match for active styling |
| strict | bool | true | Trailing slash considered for path match |
| disabled | bool | false | Disables navigation for this tab |
| className | string | 'nav-tab' | Custom className for this tab |
| activeClassName | string | 'active' | Custom activeClassName for this tab |
| style | object | empty | Custom inline style |
| activeStyle | object | empty | Custom inline style when active |

#### `<RoutedTabs />`

Helper compound component to provide props to child <NavTab> components. To use this, you must nest them directly:

```js
<RoutedTabs {...}>
  <NavTab to="/first">First</NavTab>
  <NavTab to="/second">Second</NavTab>
  /* etc */
</RoutedTabs>
```

| Prop | Type | Default | Description |
| --- |----- | ------- | ----------------- |
| startPathWith | string | empty | String to append to the start of every tab's `path` to simplify writing out full paths. In most cases this should be given `props.match.path` |
| className | string | 'react-router-tabs' | Custom className for the enclosing `<div>`s |
| style | object | empty | Custom inline styles for the enclosing `<div>`s |
| tabClassName | string | 'nav-tab' | Custom className to be provided to each tab |
| activeTabClassName | string | 'active' | Custom activeClassName to be provided to each tab |
| tabStyle | object | empty | Custom inline style to be provided to each tab |
| activeTabStyle | object | empty | Custom inline style to be provided to each tab |

## Styling

`<NavTab>` can take a `className` and `activeClassName`, and/or `style` and `activeStyle` props. If no classes are provided, it will be given defaults (see API above).

`<RoutedTabs>` can also be provided tabClassName props to propagate to its children. These will be overwritten if the NavTab has its own classNames.

A default stylesheet is provided in both .css and .scss at:

```
'node_modules/react-router-tabs/styles/react-router-tabs';
```

Please not these styles have not been tested and are provided chiefly as an example to work from.

## Acknowledgements

Thanks to the [React Router](https://github.com/ReactTraining/react-router) team. This module only exists to simplify one of a thousand use-cases for their great library.

## Author

Chace Stewart (<chacestew@gmail.com>)

## License

MIT