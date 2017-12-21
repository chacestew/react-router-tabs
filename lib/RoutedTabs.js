'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RoutedTabs = function RoutedTabs(_ref) {
  var startPathWith = _ref.startPathWith,
      className = _ref.className,
      style = _ref.style,
      tabClassName = _ref.tabClassName,
      activeTabClassName = _ref.activeTabClassName,
      tabStyle = _ref.tabStyle,
      activeTabStyle = _ref.activeTabStyle,
      children = _ref.children,
      extraProps = _objectWithoutProperties(_ref, ['startPathWith', 'className', 'style', 'tabClassName', 'activeTabClassName', 'tabStyle', 'activeTabStyle', 'children']);

  var enhancedChildren = _react2.default.Children.map(children, function (tab) {
    if (!tab) return;

    var props = tab.props;


    var to = _typeof(props.to) === 'object' ? _extends({}, props.to, { pathname: startPathWith + props.to.pathname }) : startPathWith + props.to;

    return _react2.default.cloneElement(tab, _extends({
      to: to,
      className: props.className || tabClassName,
      activeClassName: props.activeClassName || activeTabClassName,
      style: props.style || tabStyle,
      activeStyle: props.activeStyle || activeTabStyle
    }, extraProps));
  });

  return _react2.default.createElement(
    'div',
    { className: className, style: style },
    enhancedChildren
  );
};

RoutedTabs.propTypes = {
  startPathWith: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  tabClassName: _propTypes2.default.string,
  tabActiveClassName: _propTypes2.default.string,
  tabStyle: _propTypes2.default.object,
  activeTabStyle: _propTypes2.default.string,
  children: _propTypes2.default.node
};

RoutedTabs.defaultProps = {
  startPathWith: '',
  className: 'react-router-tabs',
  tabClassName: 'nav-tab',
  activeTabClassName: 'active',
  tabStyle: null,
  activeTabStyle: null
};

exports.default = RoutedTabs;