# React Router Tabs
[![npm](https://img.shields.io/npm/v/react-router-tabs.svg)](https://www.npmjs.com/package/react-router-tabs)
[![npm](https://img.shields.io/npm/dm/react-router-tabs.svg)](https://www.npmjs.com/package/react-router-tabs)
[![GitHub stars](https://img.shields.io/github/stars/chacestew/react-router-tabs.svg?style=social&label=Stars)](https://github.com/chacestew/react-router-tabs)

Simple navigation tabs for React Router 4.

![preview-gif](https://user-images.githubusercontent.com/21122529/32943041-911cf582-cb93-11e7-831e-6765a299326d.gif)

## Why?

There are many plain React solutions for tabs that conditionally render content based on some local state. In a [React Router](https://github.com/ReactTraining/react-router) app it would be preferable to keep rendering logic consistent by only using `<Route />` components. This library exports a simple component called **`<NabTab />`** which wraps React Router's [Link](https://reacttraining.com/react-router/web/api/Link) and makes it behave more like a tab.

### Benefits of this library

* Simplifies assigning tabs to paths
* Abstracts matching, setting active styles and onClick handling
* **`<RoutedTabs />`** compound component lets you set props for nested tabs (classnames, styles, path prefix, ...others)
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

// with default styles:
import 'styles/react-router-tabs.css';

const UsersPage = ({ match }) => {
  return (
    <div>
      <NavTab to="/admins">Admins</NavTab>
      <NavTab to="/moderators">Moderators</NavTab>
      <NavTab to="/users">Users</NavTab>

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
| disabled | bool | false | Disables clicking on this tab |
| allowClickOnActive | bool | false | Allows clicking even when active |
| className | string | 'nav-tab' | Custom className for this tab |
| activeClassName | string | 'active' | Custom activeClassName for this tab |
| style | object | empty | Custom inline style |
| activeStyle | object | empty | Custom inline style when active |

---

#### `<RoutedTabs />` (optional)

Helper compound component to pass props to all child **`<NavTab>`** components. Renders as a `div` by default.

```js
<RoutedTabs startPathWith={match.path} tabClassName="tab-link" activeTabClassName="active">
  <NavTab to="/admins">Admins</NavTab> // links to `${match.path}/admins`
  <NavTab to="/moderators">Moderators</NavTab>
  <NavTab to="/users">Users</NavTab>
  // etc
</RoutedTabs>
```

**NB**: **`NavTab`** must be the direct child of **`RoutedTabs`** for it to do anything. If a standard DOM element is detected, no props will be passed down. If your DOM tree requires more complex nesting, you probably don't want to use this helper.

| Prop | Type | Default | Description |
| --- |----- | ------- | ----------------- |
| startPathWith | string | empty | String to append to the start of every tab's `path` to simplify writing out full paths. In most cases this should be given `props.match.path` |
| elementType | string | 'div' | The element to render as the container |
| className | string | 'react-router-tabs' | className for the container |
| style | object | empty | Styles for the container |
| tabClassName | string | 'nav-tab' | className to be provided to each tab |
| activeTabClassName | string | 'active' | activeClassName to be provided to each tab |
| tabStyle | object | empty | Styles to be provided to each tab |
| activeTabStyle | object | empty | Styles to be provided to each tab |
| ... others | any | none | Any other props RoutedTabs doesn't expect will be passed to its children |

## Styling

**`<NavTab>`** can take a `className` and `activeClassName`, and/or `style` and `activeStyle` props. If no classes are provided, it will be given defaults (see API above).

**`<RoutedTabs>`** can also be provided with `tabClassName` prop to pass to its children. This will be overwritten if the **`<NavTab>`** has its own `className` prop.

A default stylesheet is provided in both .css and .scss at:

`node_modules/react-router-tabs/styles/react-router-tabs`

Please note these styles have not been tested and are provided mainly as an example to work from.

## Acknowledgements

Thanks to the [React Router](https://github.com/ReactTraining/react-router) team. This module only exists to simplify one of a thousand use-cases for their great library.

## Author

Chace Stewart (<chacestew@gmail.com>)

## License

MIT