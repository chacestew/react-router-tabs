'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTab = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavTab = function NavTab(_ref) {
  var to = _ref.to,
      replace = _ref.replace,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'replace', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  var path = (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to;

  var escapedPath = path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

  return _react2.default.createElement(_reactRouterDom.Route, {
    exact: exact,
    path: escapedPath,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_reactRouterDom.Link, _extends({
        to: to,
        replace: replace,
        onClick: function onClick(e) {
          return isActive ? e.preventDefault() : null;
        },
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

exports.NavTab = NavTab;
NavTab.propTypes = {
  to: _propTypes2.default.string.isRequired,
  replace: _propTypes2.default.bool,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  ariaCurrent: _propTypes2.default.oneOf(['page', 'step', 'location', 'true'])
};

NavTab.defaultProps = {
  ariaCurrent: 'true',
  replace: true,
  exact: true
};

exports.default = NavTab;