import React from 'react';
import PropTypes from 'prop-types';

const RoutedTabs = ({
  startPathWith,
  className,
  style,
  tabClassName,
  activeTabClassName,
  tabStyle,
  activeTabStyle,
  children,
  ...extraProps
}) => {
  const enhancedChildren = React.Children.map(children, tab => {
    if (!tab) return;

    const { props } = tab;

    const to =
      typeof props.to === 'object'
        ? { ...props.to, pathname: startPathWith + props.to.pathname }
        : startPathWith + props.to;

    return React.cloneElement(tab, {
      to,
      className: props.className !== 'nav-tab' ? props.className : tabClassName,
      activeclassname: props.activeClassName !== 'active' ? props.activeClassName : activeTabClassName,
      style: props.style || tabStyle,
      activestyle: props.activeStyle || activeTabStyle,
      ...extraProps
    });
  });

  return (
    <div className={className} style={style}>
      {enhancedChildren}
    </div>
  );
};

RoutedTabs.propTypes = {
  startPathWith: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  tabClassName: PropTypes.string,
  activeTabClassName: PropTypes.string,
  tabStyle: PropTypes.object,
  activeTabStyle: PropTypes.object,
  children: PropTypes.node
};

RoutedTabs.defaultProps = {
  startPathWith: '',
  className: 'react-router-tabs',
  tabClassName: 'nav-tab',
  activeTabClassName: 'active',
  tabStyle: null,
  activeTabStyle: null
};

export default RoutedTabs;
