'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _tooltip2 = require('./_tooltip');

var _tooltip3 = _interopRequireDefault(_tooltip2);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = exports.Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          active = _props.active,
          position = _props.position,
          children = _props.children,
          className = _props.className,
          dark = _props.dark;

      return _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          'in': (active || false) && !(disabled || false),
          timeout: {
            enter: 260,
            exit: 260
          },
          classNames: {
            enter: _styles2.default.tooltipTransitionEnter,
            exit: _styles2.default.tooltipTransitionExit
          },
          unmountOnExit: true },
        _react2.default.createElement(
          _tooltip3.default,
          {
            className: className,
            position: position || 'bottom',
            dark: dark },
          children
        )
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  disabled: _propTypes2.default.bool,
  position: _propTypes2.default.oneOf(['top', 'left', 'right', 'bottom']),
  active: _propTypes2.default.bool,
  dark: _propTypes2.default.bool
};

exports.default = Tooltip;