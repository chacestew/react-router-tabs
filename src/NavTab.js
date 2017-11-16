import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

/*
    NavTab is just React-Router's <NavLink> with some default props changed + an onClick handler to block clicks on the active tab.
    Forking the code instead of wrapping <NavLink> because it invokes match object we can use in the onClick, saving us doing the same thing higher up.
    Taken from: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js 
*/

export const NavTab = ({
  to,
  replace,
  exact,
  strict,
  location,
  activeClassName,
  className,
  activeStyle,
  style,
  isActive: getIsActive,
  ariaCurrent,
  ...rest
}) => {
  const path = typeof to === 'object' ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  const escapedPath = path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

  return (
    <Route
      exact={exact}
      path={escapedPath}
      strict={strict}
      location={location}
      children={({ location, match }) => {
        const isActive = !!(getIsActive ? getIsActive(match, location) : match);

        return (
          <Link
            to={to}
            replace={replace} // We usually won't want tabbed navigation appending to browser history
            onClick={e => (isActive ? e.preventDefault() : null)} // Prevent any action when the clicked tab is active
            className={isActive ? [className, activeClassName].filter(i => i).join(' ') : className}
            style={isActive ? { ...style, ...activeStyle } : style}
            aria-current={isActive && ariaCurrent}
            {...rest}
          />
        );
      }}
    />
  );
};

NavTab.propTypes = {
  to: PropTypes.string.isRequired,
  replace: PropTypes.bool,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  activeStyle: PropTypes.object,
  style: PropTypes.object,
  ariaCurrent: PropTypes.oneOf(['page', 'step', 'location', 'true'])
};

NavTab.defaultProps = {
  ariaCurrent: 'true',
  replace: true,
  exact: true
};

export default NavTab;
